import React, { Component } from 'react';
import './App.css';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            selected: this.props.selected
        };

        this.handleOnClick = this.handleOnClick.bind(this);
    }

    handleOnClick(event) {
        this.setState({
            selected: event.target.dataset.value
        });
    }

    render() {
        let tabs = this.props.data.map((item) => {
            let selected = item.value === this.state.selected ?
                           'selected' : '';

            return (
                <li
                    data-value={item.value}
                    className={selected}
                    onClick={this.handleOnClick}>
                    {item.name}
                </li>
            );
        });

        return (
            <div className="tab-selector">
                <label>{this.props.label}</label>
                <ul>
                    {tabs}
                </ul>
            </div>
        );
    }
}

export default App;
