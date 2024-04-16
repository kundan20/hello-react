import User from "./User";
import UserClass from "./UserClass";
import { Component } from "react";

class About extends Component {
    constructor(props) {
        super(props);
        console.log('About Class Constructor')
    }

    componentDidMount() {
        console.log('About Class componentDidMount')
    }
    
    render() {
        console.log('About Class Render')
        return (
            <div>
                <h1>About</h1>
                <span>This is about page...</span>
                <User name={"Pandu Nigam 1"} location={"Udupi"} />
                {/* <UserClass name={"Pandu Nigam 1"} location={"Udupi"} /> */}
            </div>
        ); 
    }
}
export default About;

// const About = () => {
//     return (
//         <div>
//             <h1>About</h1>
//             <span>This is about page...</span>
//             <User name={"Kundan Nigam"} location={"Gorakhpur"} />
//             <UserClass name={"Pandu Nigam"} location={"Udupi"} />
//         </div>
//     );
// }
// export default About;