import React from 'react';
import {Route, Switch} from "react-router-dom";
import {auth} from  './utils/firebase/firebase.utils';
import Home from './pages/home/home.component';
import Shop from './pages/shop/shop.component';
import Header from './components/header/header.component';
import SignInSignUp from './pages/sign-in-sign-up/sign-in-sign-up.component';

import "./App.css";



class App extends React.Component {

  state={
    currentUser: null
  }
  
  unsubscribeFromAuth = null;

  componentDidMount(){
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({
        currentUser: user
      })
      console.log(user);
    })
  }

  componentWillUnmount(){
    this.unsubscribeFromAuth();
  }

  render(){
  return (
    <div className="app">
      <Header currentUser={this.state.currentUser}/>
      <Switch>
        <Route path='/' exact component={Home}/>
        <Route path='/shop' component={Shop}/>
        <Route path='/sign-in' component={SignInSignUp}/>
      </Switch>
    </div>
  );
}
}

export default App;
