import React from 'react';
import { BrowserRouter, Route, Switch,Redirect } from 'react-router-dom';
import Comanda from './components/Comanda';
import Home from './components/Home';





function App() {
  return (
 
    <BrowserRouter>
    <Switch>
      <Redirect exact from="/" to="/home" />
      <Route path="/home">
        <Home/>
      </Route>
      <Route path="/comanda">
        <Comanda />
      </Route>
    </Switch>
  </BrowserRouter>
  

       
  );
}

export default App;