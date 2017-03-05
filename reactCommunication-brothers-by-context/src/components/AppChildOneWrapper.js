import React, { Component } from 'react';
import AppChildOne from './AppChildOne';

class AppChildOneWrapper extends Component {
    render() {
        return (
            <div>
                <AppChildOne />
            </div>
        );
    }
}

export default AppChildOneWrapper;
