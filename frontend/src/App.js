import React from 'react';
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";

import Header from './Components/header';
import MainScreen from './Components/mainScreen';
import BrandScreen from './Components/brandScreen';
import TransporterScreen from './Components/transporterScreen';


function App() {
  return (
    <Router>
      <Header/>
      <Switch >
        <Route exact path = "/branks" component = { BrandScreen}/> 
        <Route exact path = "/transporters" component = { TransporterScreen}/> 
        <Route exact path = "/" component = { MainScreen}/> 
      </Switch>
  </Router>
  );
}

export default App;
