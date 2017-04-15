import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import Counter from './components/Counter';
import counter from './reducers';
import { Increment, Decrement } from './actions';

const store = createStore(counter);
const rootEl = document.getElementById('root');

const render = () => ReactDOM.render(
    <Counter
        value={store.getState()}
        onIncrement={() => store.dispatch(Increment())}
        onDecrement={() => store.dispatch(Decrement())}
    />,
    rootEl
);
