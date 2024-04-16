import React from 'react';

class UserClass extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0,
            userInfo: {}
        }
        console.log("UserClass Constructor");
    }

    async componentDidMount() {
        console.log("UserClass componentDidMount");
        const data = await fetch('https://api.github.com/users/kundan20');
        const resp = await data.json();
        this.setState({
            userInfo: resp
        });
    }

    componentDidUpdate(prevProps, prevState) {
        console.log("UserClass componentDidUpdate");
        if(this.state.count !== prevState.count) {
            //do something
        }

    }

    componentWillUnmount() {
        console.log("UserClass componentWillUnmount");
    }

    render() {
        console.log("UserClass Render")

        const { name, avatar_url, bio, followers, public_repos } = this.state.userInfo;
        const { count } = this.state;

        const increaseCountHandler = () => {
            this.setState({
                count: this.state.count + 1
            })
        }
    
        return (
            <div className="user-card">
                <div>
                    <h1>Count:  {count}</h1>
                    <button onClick={increaseCountHandler}>Increase Count</button>
                    <button onClick={() => {
                        this.setState({
                            count: this.state.count - 1
                        })
                    }}>Decrease Count</button>
                </div>
                <img src={avatar_url} width={'100px'}/>
                <h2>Name: {name}</h2>
                <h3>Public Repos: {public_repos}</h3>
                <h4>Followers: {followers}</h4>
                <div>Description: {bio}</div>
            </div>
        );
    }
}
export default UserClass;