import React from 'react';
import { HashRouter as Router, Route, Switch,Redirect } from 'react-router-dom';
import Deviz from './components/Deviz';
import Home from './components/Home';





function App() {
  return (
 
    <Router>
    <Switch>
      <Redirect exact from="/" to="/home" />
      <Route path="/home">
        <Home/>
      </Route>
      <Route path="/deviz">
        <Deviz />
      </Route>
    </Switch>
  </Router>
  

       
  );
}

export default App;