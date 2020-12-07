import React from 'react';

import './SideDrawer.css';
import { history } from '../../../history';
import { NavLink } from "react-router-dom";
import Header from "../header/Header";
import CloseIcon from '@material-ui/icons/Close';


const APP_MENU = [
  {
    text: 'DashBoard',
    title: 'DashBoard',
    icon: "fa-box",
    component: 'DashBoard'
  },
  {
    text: 'My Activity',
    title: 'My Activity',
    component: 'MyActivity'
  },
  {
    text: 'Project & Tasks',
    title: 'Project & Tasks',
    component: 'ProjectAndTasks'
  },
  {
    text: 'People',
    title: 'People',
    component: 'People'
  },
  {
    text: 'Inventory',
    title: 'Inventory',
    component: 'Inventory'
  },
  {
    text: 'AddUser',
    title: 'AddUser',
    component: 'AddUser'
  }
]

class SideDrawer extends React.Component {

  render() {
    let drawerClasses = ['side-drawer'];
    if (this.props.show) {
      drawerClasses = ['side-drawer', 'open']
    }
    return (
      <nav className={drawerClasses} defaultActiveKey="/Dashboard">
        <div className="drawer">
          <div className="drawer__header">
            <h5 className="pl-3">Menu</h5>
            <button>
              <CloseIcon className="drawer__headercloseicon" onClick={this.props.toggleShow}></CloseIcon>
            </button>
          </div>

          <div className="menu-container py-3">
            {APP_MENU.map((item, index) =>

              <NavLink key={index}
                exact
                to={item.component}
                className="menu-item"
                onClick={this.props.toggleShow}
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