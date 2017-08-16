import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <App
    values={['State.', 'should.', 'Be.', 'Synchronous.']}
    onSelect={value => console.log(value)}
  />,
  document.getElementById('root'));
registerServiceWorker();
