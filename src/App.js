import { React } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { Homepage } from './pages/homepage';
import { Dashboard } from './pages/dashboard';
import { Login } from './pages/login';

function App() {

  return (
    <Router basename={"/novoa/minerva-test"}>
      <Switch>
        <Route exact path='/' component={Login} />
        <Route exact path='/homepage/' component={Homepage} />
        <Route exact path='/dashboard/' component={Dashboard} />
      </Switch>
    </Router>
  );
}

export default App;
