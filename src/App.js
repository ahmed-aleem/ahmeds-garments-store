import React from 'react';
import {Route, Switch} from "react-router-dom";
import {connect} from 'react-redux';
import {setCurrentUser} from './redux/user/user.action';
import {auth, createUserProfileDocument} from  './utils/firebase/firebase.utils';
import Home from './pages/home/home.component';
import Shop from './pages/shop/shop.component';
import Header from './components/header/header.component';
import SignInSignUp from './pages/sign-in-sign-up/sign-in-sign-up.component';

import "./App.css";



class App extends React.Component {
  
  unsubscribeFromAuth = null;

  componentDidMount(){
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {

      const {setActiveUser} = this.props;

      if(userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapshot => {
          setActiveUser({
            id: snapshot.id,
            ...snapshot.data()
          }) 
        })
        
      }

        setActiveUser(userAuth);
    })
  }

  componentWillUnmount(){
    this.unsubscribeFromAuth();
  }

  render(){
    return (
      <div className="app">
        <Header/>
        <Switch>
          <Route path='/' exact component={Home}/>
          <Route path='/shop' component={Shop}/>
          <Route path='/sign-in' component={SignInSignUp}/>
        </Switch>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  //handler: handlerparameter => dispatch(action(argument))
  setActiveUser: user => dispatch(setCurrentUser(user))
})

export default connect(null, mapDispatchToProps)(App);
