import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Runner from './Components/Runner.js';
import Hunter from './Components/Hunter.js';
import { Route, Switch } from "react-router-dom";

function App() {
  
  return (
    <div className="full-app">
      <Switch>
        <Route exact path="/" component={Runner} />
        <Route path="/hunter" component={Hunter} />
      </Switch>
    </div>
  );
}

export default App;
