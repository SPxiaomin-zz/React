import React, { Component } from 'react';
import { Link } from 'react-router';

class App extends Component {
    componentDidMount() {
        console.log('App did mount');
    }

    componentWillReceiveProps() {
        console.log('App will receive props');
    }

    componentDidUpdate() {
        console.log('App did update');
    }

    render() {
        return (
            <div>
                <h1>首页</h1>
                <hr />
                <div>
                    <Link to='/'>首页</Link>
                    <Link to={{ pathname: '/tv', query: {orderBy: 'date'} }}>电视</Link>
                </div>
                {this.props.children}
            </div>
        );
    }
}

export default App;
