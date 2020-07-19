import React from 'react';

import './SideDrawer.css';
import { history } from '../../../history';
import { NavLink } from "react-router-dom";
import Header from "../header/Header";


const APP_MENU = [
  {
    text: 'DashBoard',
    title: 'DashBoard',
    icon: "fa-box",
    component : 'DashBoard'
  },
  {
    text: 'My Activity',
    title: 'My Activity',
    component : 'MyActivity'
  },
  {
    text: 'Project & Tasks',
    title: 'Project & Tasks',
    component : 'ProjectAndTasks'
  },
  {
    text: 'People',
    title: 'People',
    component : 'People'
  },
  {
    text: 'Inventory',
    title: 'Inventory',
    component : 'Inventory'
  },
  {
    text: 'AddUser',
    title: 'AddUser',
    component : 'AddUser'
  }
]

class SideDrawer extends React.Component {

 constructor(props) {
  super(props);
  this.state = {
    sidedrawerOpen : true
  }
 }
   render() {
    return(
    <nav className="side-drawer" defaultActiveKey="/Dashboard">  
    <div className="drawer">
        <div className="drawer-header">
          <h5 className="pl-3">Menu</h5>
        </div> 
        <div className="menu-container py-3">
        {APP_MENU.map(( item, index ) => 
            // <button key={index} onClick={(event) => this.onItemSelected(event, item)}>
            // <li>{item.title}</li>
            // <i className={`fas ${item.icon} mr-3`}></i>{item.title}
            // </button>
            <NavLink key={index}
            exact
            to={item.component}
            className="menu-item"
            onClick={this.props.drawerToggleClickHandler}
          >
             <i className={`fas ${item.icon} mr-3`}></i>{item.title}
                </NavLink>
        )
          }
          </div>
          </div>
    </nav>
    )
}
}

export default SideDrawer;