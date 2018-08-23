import React, {Component} from 'react';

class App extends Component {
  state = {
    token: {},
  };

  async componentDidMount() {
    await Meteor.call('getToken', {}, (err, res) => {
      if (err) {
        console.log(err);
      }
      this.setState({token: res});
    });
  }

  render() {
    console.log(typeof this.state.token, this.state.token)
    return (
      <div className="app">
        <p>LOLOLOLOLOLO</p>
      </div>
    );
  }
}

export default App;
