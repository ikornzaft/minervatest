import { React } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { Homepage } from './components/pages/homepage';
import { Login } from './components/pages/login';

function App() {

  return (
    <Router basename={"/novoa/minerva-test"}>
      <Switch>
        <Route exact path='/' component={Login} />
        <Route exact path='/homepage/' component={Homepage} />
      </Switch>
    </Router>
  );
}

export default App;
