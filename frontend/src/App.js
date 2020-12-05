import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch, Redirect } from "react-router-dom";

import Header from './Components/header';
import MainScreen from './Components/mainScreen';


function App() {
  return (
    <Router>
      <Header/>
      <Switch >
          <Route exact path = "/" component = { MainScreen}/> 
      </Switch>
  </Router>
  );
}

export default App;
