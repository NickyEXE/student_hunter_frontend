import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Runner from './Components/Runner.js';
import Hunter from './Components/Hunter.js';
import Timer from './Components/Timer.js';
import { Route, Switch } from "react-router-dom";

function App() {
  
  return (
    <React.Fragment>
      <Timer/>
      <Switch>
        <Route exact path="/" component={Runner} />
        <Route path="/hunter" component={Hunter} />
      </Switch>
    </React.Fragment>
  );
}

export default App;
