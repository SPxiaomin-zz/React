import React, { Component } from 'react';
import Perf from 'react-addons-perf';

import ListItem from '../ListItem';

window.Perf = Perf;

function arrayGenerator(len) {
  return Array.apply(null, { length: len }).map(Number.call, Number);
}

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      multiplier: 1,
    };

    this.resetMultiplier = this.resetMultiplier.bind(this);
  }

  resetMultiplier() {
    // Perf.start('Perf');
    this.setState({
      multiplier: 2,
    });
  }

  componentDidUpdate() {
    // Perf.stop('Perf');
    // Perf.printInclusive();
    // Perf.printWasted();
  }

  render() {
    return (
      <div>
        <button onClick={this.resetMultiplier}>Click Me</button>
        <ul>
          {
            arrayGenerator(5000).map((item) => {
              return <ListItem key={item} text={item} />
            })
          }
          {
            arrayGenerator(5000).map((item) => {
              return <ListItem key={item} text={item + this.state.multiplier} />
            })
          }
        </ul>
      </div>
    );
  }
}

export default App;
