import React from 'react';
import {Route, Switch} from "react-router-dom";
import Home from './pages/home/home.component';
import Shop from './pages/shop/shop.component';

import "./App.css";

const App = () => {
  return (
    <div className="app">
      <Switch>
        <Route path='/' exact component={Home}/>
        <Route path='/shop' component={Shop}/>
      </Switch>
    </div>
  );
}

export default App;
