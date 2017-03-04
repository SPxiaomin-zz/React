import React, { Component } from 'react';
import AppChildOne from './components/AppChildOne';

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
                <AppChildOne list={this.state.list} changeItem={(item) => {
                    this.changeItem(item);
                }} />
            </div>
        );
    }
}

export default App;
