import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';

import routes from './Routes';

import logo from './../logo.svg';
import './../App.css';

let browserHistory = createBrowserHistory();

class App extends Component {
  render () {
    return (
      <Router history={browserHistory}>
        <div className="App">
          <div className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h2>Welcome to React</h2>
          </div>
          <p className="App-intro">
            To get started, edit <code>src/App.js</code> and save to reload.
          </p>
          <Switch>
            {
              routes.map(
                (route, i) => route.path === '/' ?
                  <Route key={i} exact path={route.path}
                         component={route.component}>
                    <Redirect from="/"
                              to="/about" />
                  </Route> : <Route key={i} exact path={route.path}
                                    component={route.component} />)
            }

          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
