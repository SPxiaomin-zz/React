import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import BasicExample from './App';
import registerServiceWorker from './registerServiceWorker';

import { Provider } from 'react-redux';
import { createStore } from 'redux';

import reducer from './reducer';

const store = createStore(reducer);

ReactDOM.render(
  <Provider store={store}>
    <BasicExample />
  </Provider>,
  document.getElementById('root'));
registerServiceWorker();
