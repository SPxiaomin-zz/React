import React, { Component } from 'react';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            loading: true,
            error: null,
            data: null
        };
    }

    render() {
        let repoList;

        if (this.state.loading) {
            return <span>Loading...</span>;
        } else if (this.state.error !== null) {
            return <span>Error: {this.state.error.message}</span>;
        } else {
            let repos = this.state.data.items;

            repoList = repos.map((repo) => {
                return (
                    <li>
                        <a href={repo.html_url}>{repo.name}</a> ({repo.stargazers_count} stars) <br/> {repo.description}
                    </li>
                );
            });
        }

        return (
            <main>
                <h1>Most Popular JavaScript Projects in Github</h1>
                <ol>{repoList}</ol>
            </main>
        );
    }

    componentDidMount() {
        this.props.promise.then(
            value => this.setState({loading: false, data: value}),
            error => this.setState({loading: false, error: error})
        );
    }
}

export default App;
