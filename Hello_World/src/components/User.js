import { useEffect, useState } from 'react';

const User = (props) => {
    console.log('User Functional Render')

    const [count, setCount] = useState(0);

    const { name, location } = props;

    const increaseCountHandler = () => {
        setCount(count + 1);
    }
    useEffect(() => {
        console.log('User Functional UseEffect');
        const interval = setInterval(() => {
            console.log('Hello Interval.')
        }, 1000);

        return () => { //use for cleanup
            clearInterval(interval);
        }
    }, [])

    return (
        <div className="user-card">
            <h1>Count: {count}</h1>
            <button onClick={increaseCountHandler}>Increase Count</button>
            <button onClick={() => setCount(count - 1)}>Decrease Count</button>
            <h2>Name: {name}</h2>
            <h3>Location: {location}</h3>
            <h4>Contact: </h4>
            <div>Description: </div>
        </div>
    );
}
export default User;