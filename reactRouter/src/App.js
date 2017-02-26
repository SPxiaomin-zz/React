import React, { Component } from 'react';
import { Link } from 'react-router';

class App extends Component {
  render() {
    return (
        <div>
            <h1>首页</h1>
            <hr />
            <div>
                <Link to='/'>首页</Link>
                <Link to='/tv'>电视</Link>
            </div>
            {this.props.children}
        </div>
    );
  }
}

export default App;
