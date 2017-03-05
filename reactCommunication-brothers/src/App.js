import React, { Component } from 'react';
import AppChildOne from './components/AppChildOne';
import AppChildTwo from './components/AppChildTwo';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            list: ['item1', 'item2'],
            curItem: 'item1'
        };
    }

    changeItem(item) {
        this.setState({
            curItem: item
        });
    }

    render() {
        return (
            <div>
                The curItem is: {this.state.curItem}
                <AppChildOne list={this.state.list} curItem={this.state.curItem} />
                <AppChildTwo changeItem={(item) => {
                    this.changeItem(item);
                }} />
            </div>
        );
    }
}

export default App;
