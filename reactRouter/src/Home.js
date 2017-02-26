import React, { Component } from 'react';

class Home extends Component {
    componentDidMount() {
        console.log('Home did mount');
    }

    componentWillUnmount() {
        console.log('Home will unmount');
    }

    render() {
        return (
            <div>
                首页内容
            </div>
        );
    }
}

export default Home;
