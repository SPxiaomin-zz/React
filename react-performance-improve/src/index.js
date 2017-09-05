import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import App from './TestOne/component/App';
import registerServiceWorker from './registerServiceWorker';

import { createStore } from 'redux';
import { Provider, connect } from 'react-redux';
import { Map, List } from 'immutable';

import Perf from 'react-addons-perf';
window.Perf = Perf;

/**
 * Reducer
 */

const initState = Map({
  words: List([1, 2, 3]),
  buttonText: List(['buttonText']),
});

const reducer = (state = initState, action) => {
  switch (action.type) {
    case 'BUTTON_CLICK':
      return state.update('words', words => words.push('o'));

      // return {
      //   ...state,
      //   words: state.words.concat('o'),
      // }
    default:
      return state;
  }
};

/**
 * Actions
 */

const buttonClick = () => ({
  type: 'BUTTON_CLICK',
});

/**
 * Components
 */

class SubApp extends React.Component {
  render() {
    const { words } = this.props;

    console.log('SubApp render test');

    return (
      <div>{words.join()}</div>
    );
  };
}

const mapStateToProps = (state) => ({
  words: state.get('words'),
});

SubApp = connect(
  mapStateToProps,
  null
)(SubApp);

class ButtonApp extends React.Component {
  render() {
    const { clickHandler, buttonText } = this.props;

    console.log('button render test');

    return (
      <div>
        <button onClick={clickHandler}>Click Me!!!</button>
        <p>{buttonText.join()}</p>
      </div>
    );
  }
}

const mapStateToButtonProps = (state) => ({
  buttonText: state.get('buttonText'),
});

const mapDispatchToButtonProps = (dispatch) => ({
  clickHandler: () => {
    dispatch(buttonClick());
  },
});

ButtonApp = connect(
  mapStateToButtonProps,
  mapDispatchToButtonProps
)(ButtonApp);

/*
class App extends React.Component {
  render() {
    return (
      <div>
        <SubApp />
        <ButtonApp />
      </div>
    );
  }
}
*/

let store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

// ReactDOM.render(
//   <Provider store={store}>
//     <App />
//   </Provider>,
//   document.getElementById('root'));

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
