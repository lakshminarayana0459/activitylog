import React from 'react';
import { Route, Redirect, Router,Switch } from "react-router-dom"; 
import SignIn from "../components/signIn/SignIn";
import Home from "../Home";
import { history } from '../history';

const checkIfAuthed = (store) => {
    
    const state = store.getState();
    console.log(" login status" + state.signin.loggedIn);
    return state.signin.loggedIn;
    //state.signin.loggedIn;
};
 
export const getRoutes = (store) => {
    const PrivateRoute = ({ component: Component, ...rest }) => (
      <Route {...rest} render={props => (
        checkIfAuthed(store) ? (
          <Component {...props}/>
        ) : (
          <Redirect to={{
            pathname: '/login',
            state: { from: props.location }
          }}/>
        )
      )}/>
    )
    
    return (
      
      <Router history={ history } forceRefresh={true}>
      <Switch>
        <Route path="/login" exact component={SignIn} />
        <PrivateRoute  exact path="/home" component={Home} />
        </Switch>
      </Router>
    )
  }
