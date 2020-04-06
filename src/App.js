import React from 'react';
import {Route, Switch} from "react-router-dom";
import Home from './pages/home/home.component';
import HatsPage from './pages/hats/hats.component';

const App = () => {
  return (
    <div className="app">
      <Switch>
        <Route path='/' exact component={Home}/>
        <Route path='/hats' component={HatsPage}/>
      </Switch>
    </div>
  );
}

export default App;
