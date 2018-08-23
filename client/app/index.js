import React, {Component} from 'react';

class App extends Component {
  render() {
    console.log(typeof this.state.token, this.state.token)
    return (
      <div className="app" />
    );
  }
}

export default App;
