import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Data } from './data';

ReactDOM.render(
    <App label="Color" data={Data} selected={null} />,
    document.getElementById('root')
);
