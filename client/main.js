import React, {Component} from 'react';
import {render} from 'react-dom';
import Router from './router';
import 'normalize.css';
import 'material-components-web/dist/material-components-web.min.css';

class App extends Component {
  render() {
    return <Router />;
  }
}

Meteor.startup(() => {
  render(<App />, document.getElementById('root'));
});
