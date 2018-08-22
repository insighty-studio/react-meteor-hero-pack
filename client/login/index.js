import React, {Component} from 'react';

// TODO use framework form
class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      login: '',
      password: '',
    };
  }

  login = (e) => {
    e.preventDefault();
    Meteor.loginWithPassword(this.state.login, this.state.password);
  };

  render() {
    return (
      <div className="login">
        <div className="login-form">
          <form onSubmit={this.login}>
            <input
              type="text"
              placeholder="Login"
              value={this.state.login}
              onChange={({target: {value}}) => this.setState({login: value})}
            />
            <input
              type="password"
              placeholder="Password"
              value={this.state.password}
              onChange={({target: {value}}) => this.setState({password: value})}
            />
            <button type="submit">Login</button>
          </form>
        </div>
        <div className="video" />
      </div>
    );
  }
}

export default Login;
