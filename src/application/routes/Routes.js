import React from 'react';
import { Route, Redirect, Router,Switch } from "react-router-dom"; 
import SignIn from "../components/signIn/SignIn";
import Home from "../Home";
import Dashboard from "../components/dashboard/dashbaord";
import MyActivity from "../components/myactivity/MyActivity";
import ProjectAndTasks from "../components/projectAndtasks/ProjectAndTask";
import People from "../components/people/People";
import Inventory from "../components/inventory/Inventory";
import AddUser from "../components/adduser/AddUser";

import Header from "../components/common/header/Header";

import { history } from '../history';

const checkIfAuthed = (store) => {
    
    const state = store.getState();
    console.log(" login status" + state.signin.loggedIn);
    return true;
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
        {/* <Route path="/" render={(props) => (props.location.pathname !== "/login") && 
         <Header drawerToggleClickHandler={this.drawerToggleclick}/>}>
      </Route> */}
      <Switch>
        <Route path="/login" exact component={SignIn} />
        <PrivateRoute exact path="/home" component={Home} />
        <PrivateRoute exact path="/dashboard" component={Dashboard}/>
        <PrivateRoute exact path="/myactivity" component={MyActivity}/>
        <PrivateRoute exact path="/projectAndtasks" component={ProjectAndTasks}/>
        <PrivateRoute exact path="/people" component={People}/>
        <PrivateRoute exact path="/inventory" component={Inventory}/>
        <PrivateRoute exact path="/adduser" component={AddUser}/>
        </Switch>
      </Router>
    )
  }
