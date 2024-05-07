import { useEffect, useRef, useState } from "react";
const Todo = () => {
  const [taskDesc, setTaskDesc] = useState("");
  const [tasksData, setTasksData] = useState([]);
  const [tasksFilterData, setTasksFilterData] = useState([]);

  const [isEdit, setIsEdit] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(null);

  const inputRef = useRef();
  const taskHandler = () => {
    if (taskDesc !== "") {
      const task = {
        id: new Date().getTime(),
        content: taskDesc,
        taskStatus: "TODO",
      };
      let newData = [...tasksData];
      newData.push(task);
      // newData.unshift(task);

      // newData.sort((a, b) => b.id - a.id); //for id
      newData.sort((a, b) =>
        a.taskStatus > b.taskStatus ? 1 : b.taskStatus > a.taskStatus ? -1 : 0
      );
      setTasksData(newData);
      setTasksFilterData(newData);
      // setTasksData([...tasksData, task]);
    }
    setTaskDesc("");
  };
  const deleteHandler = (taskId) => {
    const filteredTask = tasksData.filter((task) => task.id !== taskId);
    setTasksData(filteredTask);
    setTasksFilterData(filteredTask);
  };
  const modificationHandler = (taskId, entity) => {
    let taskDescTemp = document.getElementById(
      "task-content-" + taskId
    ).innerText;
    // const newData = JSON.parse(JSON.stringify(tasksData));
    // newData.forEach((element) => {
    //   if (element.id === taskId && taskDescTemp.trim() !== '') {
    //     element.content = taskDescTemp;
    //   }
    // });
    const latestTasksData = tasksData.map((item) => {
      if (item.id === taskId) {
        if (entity === "EDIT") {
          return {
            ...item,
            content: taskDescTemp,
          };
        } else {
          return {
            ...item,
            taskStatus: entity,
          };
        }
      }
      return item;
    });
    latestTasksData.sort((a, b) =>
      a.taskStatus > b.taskStatus ? 1 : b.taskStatus > a.taskStatus ? -1 : 0
    );
    setTasksData(latestTasksData);
    setTasksFilterData(latestTasksData);
    setIsEdit(false);
  };
  useEffect(() => {
    inputRef?.current?.focus();
  }, [isEdit, currentIndex]);

  const cancelHandler = (task) => {
    setIsEdit(false);
    document.getElementById("task-content-" + task.id).innerText = task.content;
  };
  const filterHandler = (entity) => {
    const filterData = tasksFilterData.filter(
      (item) => item.taskStatus === entity
    );
    console.log("tasksFilterData", tasksFilterData);
    console.log("filterData", filterData);

    setTasksData(filterData);
  };
  return (
    <div className="App">
      <div className="task-input-container">
        <input
          type="text"
          placeholder="Add Task..."
          value={taskDesc}
          onChange={(e) => setTaskDesc(e.target.value)}
        />
        <button className="task-btn" onClick={taskHandler}>
          ADD
        </button>
      </div>
      <div className="action-items">
        <div className="filter">
          <img
            height="25"
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJsAAACUCAMAAACz6atrAAAAWlBMVEX///8AAABxcXEtLS3Z2dno6Ojr6+vl5eVCQkLKyso+Pj45OTkoKCjNzc0YGBgGBgapqal6enq1tbXExMRhYWEeHh4jIyMRERH29vYzMzNHR0ff399oaGidnZ0o/+a9AAACaElEQVR4nO3c2XrCIBAFYFJNNGpc6m7b93/Nql1cAjLAwMzFOU/wfwPMhJjWGARBEARBEARB1GW5eiub1ZIoe68k8k6hDUVoVTUk2E5CtpOf1s6FbPPWa1sK0arKfx4029YLIdpi7d9wGyHbxk8z9VaEtq0JNjMaC9AmIwrNmEbA1tBo52UtXbkxaUF/K1f4sAbQClduEkQ7H4hZMdqOeAzuKjctRJsGVu1auWMR2jG4atfKDQrQBhFVu1Zukp1GbbmWyuV+lttH07K3kpCW20/e8UUeVA5cvuvDOJGWcc/NE/baPy7PngsdVA5cjj43Y6jaJSP+8TVlomXA8dHYl3XGstf+wnqHiB9U9jR7Ntoiua89h62VpA0qe7jGF3vVrjiOyqUPKnvqXTKNdnuPSZP6sDnJVLVLEu8QA+bm8ZgmZUIcM1btkoQ7BHfL7aeOvVTvsh2DO1xcK8nRcvuJGl/8g8qBC79DnArRIl6BLYos6C8urHK5BpUDF3JaS5zQ+9T0PsdzowrCUSdEzPu11DS02XoUoBHvEPkHlT2N/3luV/SE3mfoe1cyp/yYnMnmu7YOYIMNNthggw022GCDDTbYYIMNNthggw022GCDDTbYYOOI92MRQZtZKbaNFNtM9/pbEVGbaRXbTPuqcsK2l5WTtpm1YptpnZ8Aydvcy6rA5vwDbg02V+VU2ByV02EznWKbtQlrsdn2nBqbpc/psfUrp8jWOxCabM/Lqsr2VDldtsdWosz2cCCmH9Kap3S38fUpbenlVjnCvwQpne7nI9H9lzTElo/Vttq+ddIMRw6HgzQBQZAC+QaIhCY+rQ8ZqAAAAABJRU5ErkJggg=="
          />
        </div>
        <button className="task-btn" onClick={() => filterHandler("DONE")}>
          DONE
        </button>
        <button
          className="task-btn"
          onClick={() => filterHandler("INPROGRESS")}
        >
          IN-PROGRESS
        </button>
        <button className="task-btn" onClick={() => filterHandler("TODO")}>
          TODO
        </button>
        <button
          className="task-btn"
          onClick={() => setTasksData(tasksFilterData)}
        >
          RESET
        </button>
      </div>
      <div className="tasks-container">
        {tasksData?.map((task, index) => {
          return (
            <div
              className={`task-item-container ${
                task.taskStatus === "TODO"
                  ? "border-left-todo"
                  : task.taskStatus === "INPROGRESS"
                  ? "border-left-in-progress"
                  : "border-left-green"
              }`}
              key={task.id}
            >
              <div
                id={`task-content-${task.id}`}
                className="task-item"
                ref={inputRef}
                contentEditable={isEdit && task.id === currentIndex}
                suppressContentEditableWarning={
                  isEdit && task.id === currentIndex
                }
              >
                {task.content}
              </div>
              <div className="action-btns">
                {isEdit && task.id === currentIndex ? (
                  <>
                    <button
                      onClick={() => modificationHandler(task.id, "EDIT")}
                    >
                      ✅
                    </button>
                    <button onClick={() => cancelHandler(task)}>❌</button>
                  </>
                ) : (
                  <>
                    <button
                      onClick={() => modificationHandler(task.id, "DONE")}
                    >
                      ☑️
                    </button>
                    <button
                      onClick={() => modificationHandler(task.id, "INPROGRESS")}
                    >
                      ⏳
                    </button>

                    <button
                      onClick={() => {
                        setIsEdit(true);
                        setCurrentIndex(task.id);
                      }}
                    >
                      📝
                    </button>
                    <button onClick={() => deleteHandler(task.id)}>🗑️</button>
                  </>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default Todo;
