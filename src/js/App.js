import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';

import routes from './Routes';

import LeftSidebar from './components/LeftSidebar';
import RightSidebar from './components/RightSidebar';
import MenuModal from './components/menuModal/MenuModal';

import NavigationStore from './stores/NavigationStore';
import RightSidebarStore from './stores/RightSidebarStore';

let browserHistory = createBrowserHistory();

class App extends Component {
  render () {
    return (
      <Router history={browserHistory}>
        <div className="container-fluid screen1">
          <div className="row">
            <LeftSidebar sections={NavigationStore} />

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
            <RightSidebar sprites={RightSidebarStore} />
          </div>
          <MenuModal sections={NavigationStore} />
        </div>
      </Router>
    );
  }
}

export default App;
