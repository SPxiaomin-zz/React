import React, { Component } from 'react';

import A from '../A';
import B from '../B';
import C from '../C';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      shape: 1,
    };

    this.changeShape = this.changeShape.bind(this);

    this.differentType = this.differentType.bind(this);
    this.listWithoutKey = this.listWithoutKey.bind(this);
  }

  changeShape() {
    this.setState({
      shape: 0,
    });
  }

  differentType() {
    // return (
    //   this.state.shape === 0
    //     ? (<A>
    //         <C />
    //       </A>)
    //     : (<B>
    //         <C />
    //       </B>)
    // );

    if (this.state.shape) {
      return (
        <A>
          <C />
        </A>
      );
    } else {
      return (
        <B>
          <C />
        </B>
      );
    }
  }

  listWithoutKey() {
    if (this.state.shape) {
      return (
        <div>
          {/* TODO: stop writing here */}
        </div>
      );
    } else {

    }
  }

  render() {
    return (
      <div>
        {/* <button onClick={this.changeShape}>Change Shape</button>
        {
          this.differentType()
        } */}
        <button onClick={this.changeShape}>Change List</button>
      </div>
    );
  }
}

export default App;
