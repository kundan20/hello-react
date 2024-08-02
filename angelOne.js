function task(callback) {
    const value = Math.random() * 100;
    setTimeout(() => {
        callback(value);
    }, Math.random() * 1000)
}

const tasks = [
    task,
    task,
    task,
    task,
    task,
]

seriesExecutor(tasks, (value) => console.log(value));

function getRandomVal(taskCallback, i) {
	return new Promise((resolve, reject) => {
  	if (taskCallback && typeof taskCallback === 'function') {
        console.log("i pr", i);
    	taskCallback((val) => { 
            resolve(val);
    });        
    }
  })
}

async function seriesExecutor(tasks, callback) {
	let i = 0;
    const response = [];
    while(i < tasks.length) {
        const resp = await getRandomVal(tasks[i], i);
        response.push(resp);
        i++;
    }
    response.forEach((item) => callback(item));
}
