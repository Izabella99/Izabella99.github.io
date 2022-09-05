import React from 'react';
import { BrowserRouter, Route, Switch,Redirect } from 'react-router-dom';
import Deviz from './components/Deviz';
import Home from './components/Home';





function App() {
  return (
 
    <BrowserRouter>
    <Switch>
      <Redirect exact from="/" to="/home" />
      <Route path="/home">
        <Home/>
      </Route>
      <Route path="/deviz">
        <Deviz />
      </Route>
    </Switch>
  </BrowserRouter>
  

       
  );
}

export default App;