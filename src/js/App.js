import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import routes from './Routes';

import logo from './../logo.svg';
import './../App.css';

class App extends Component {
  render () {
    return (
      <Router>
        <div className="App">
          <div className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h2>Welcome to React</h2>
          </div>
          <p className="App-intro">
            To get started, edit <code>src/App.js</code> and save to reload.
          </p>
          {
            routes.map(
              (route, i) => <Route key={i} exact path={route.path}
                                   component={route.component} />)
          }
        </div>
      </Router>
    );
  }
}

export default App;
