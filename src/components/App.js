import React from 'react';
import Navbar from './Navbar';
import { Switch, Route } from 'react-router-dom';

import Home from './Home';
import Project from './Project';
import Resume from './Resume';
import 'bulma/css/bulma.css';

function App() {
  return (
    <div>
      <Navbar />

      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/project">
          <Project />
        </Route>
        <Route path="/resume">
          <Resume />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
