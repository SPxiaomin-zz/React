import React, { Component } from 'react';
import $ from 'jquery';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            username: '',
            lastGistUrl: ''
        };
    }

    componentDidMount() {
        $.get(this.props.source, (result) => {
            let lastGist = result[0];

            this.setState({
                username: lastGist.owner.login,
                lastGistUrl: lastGist.html_url
            });
        });
    }

    render() {
        return (
            <div>
                {this.state.username}'s last gist is&nbsp;
                <a href={this.state.lastGistUrl}>here</a>
            </div>
        );
    }
}

export default App;
