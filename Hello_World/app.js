
{/* <div id="parent">
    <div id="child">
        <h1 id="header"></h1>
        <h2 id="header"></h2>
    </div>
</div> */}
const parent = React.createElement("div", {
    id: 'parent'
    }, 
    [
        React.createElement("div", {
            id: 'child'
        }, [
                React.createElement("h1", {
                    id: 'heading'
                }, "Hello Header"),
                React.createElement("h2", {
                    id: 'heading'
                }, "Hello Header 2")
            ]
        ),
        React.createElement("div", {
            id: 'child2'
        }, [
                React.createElement("h1", {
                    id: 'heading'
                }, "Hello Header"),
                React.createElement("h2", {
                    id: 'heading'
                }, "Hello Header 2")
            ]
        )
    ]
);
const heading = React.createElement("h2", {
    id: 'heading'
}, "Hello world from React World.");

const root = ReactDOM.createRoot(document.getElementById("root"));
console.log(parent); //object
root.render(parent);