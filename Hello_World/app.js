import React from "react";
import ReactDOM  from "react-dom/client";

const heading1 = React.createElement("span", {
    id: 'heading'
}, "Hello React using React element");

const heading2 = (
    <h1 className="heading" tabIndex="1">
        {heading1}
        Hello React using JSX
    </h1>
);

const Heading3 = function() {
    return (
    <h1 className="heading" tabIndex="5">
        Hello React using functional component
    </h1>
    ); 
}
const number = 10000;
//React functional component:
const HeadingComponent1 = () => {
    return (
        <div className="container">
            { heading2 }
            {Heading3()}
            <Heading3 />
            <Heading3></Heading3>
            <span>{number}</span>
            <h1>Hello Functional Component.🚀</h1>
        </div>
    );
}
const HeadingComponent2 = () => (
    <h1 className="heading">Hello Functional Component.</h1>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);
root.render(<HeadingComponent1 />);