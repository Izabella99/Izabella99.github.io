import React from 'react';
import { HashRouter as Router, Route, Switch,Redirect } from 'react-router-dom';
import Comanda from './components/Comanda';
import Home from './components/Home';





function App() {
  return (
 
    <Router>
    <Switch>
      <Redirect exact from="/" to="/home" />
      <Route path="/home">
        <Home/>
      </Route>
      <Route path="/comanda">
        <Comanda />
      </Route>
    </Switch>
  </Router>
  

       
  );
}

export default App;