import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

var data = [
    {name: 'Red', value: 'red'},
    {name: 'Blue', value: 'blue'},
    {name: 'Yellow', value: 'yellow'},
    {name: 'Green', value: 'green'},
    {name: 'White', value: 'white'}
];

ReactDOM.render(
    <App label="Color" data={data} selected={null} />,
    document.getElementById('root')
);
