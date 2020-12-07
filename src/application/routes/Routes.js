import React from 'react';
import { Redirect, Route, Switch } from "react-router-dom";
import AddUser from "../components/adduser/AddUser";
import Dashboard from "../components/dashboard/dashbaord";
import Inventory from "../components/inventory/Inventory";
import MyActivity from "../components/myactivity/MyActivity";
import People from "../components/people/People";
import ProjectAndTasks from "../components/projectAndtasks/ProjectAndTask";
import SignIn from "../components/signIn/SignIn";
import { store } from '../helper/store';
import Home from "../Home";


const checkIfAuthed = (store) => {

  const state = store.getState();
  console.log(" login status" + state.signin.loggedIn);
  return true;
  //state.signin.loggedIn;
};


const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={props => (
    checkIfAuthed(store) ? (
      <Component {...props} />
    ) : (
        <Redirect to={{
          pathname: '/login',
          state: { from: props.location }
        }} />
      )
  )} />
)


// export const getRoutes = (store ) => {

// const PrivateRoute = ({ component: Component, ...rest }) => (
//   <Route {...rest} render={props => (
//     checkIfAuthed(store) ? (
//       <Component {...props}/>
//     ) : (
//       <Redirect to={{
//         pathname: '/login',
//         state: { from: props.location }
//       }}/>
//     )
//   )}/>
// )

function Routes() {

  return (
    <Switch>
      <Route path="/login" exact component={SignIn} />
      <PrivateRoute exact path="/home" component={Home} />
      <PrivateRoute exact path="/" component={Home} />
      <PrivateRoute exact path="/dashboard" component={Dashboard} />
      <PrivateRoute exact path="/myactivity" component={MyActivity} />
      <PrivateRoute exact path="/projectAndtasks" component={ProjectAndTasks} />
      <PrivateRoute exact path="/people" component={People} />
      <PrivateRoute exact path="/inventory" component={Inventory} />
      <PrivateRoute exact path="/adduser" component={AddUser} />
    </Switch>
  )
}

export default Routes;
