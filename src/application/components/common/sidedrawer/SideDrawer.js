import React from 'react';

import './SideDrawer.css';
import DashBoard from '../../dashboard/dashbaord';

const APP_MENU = [
    {
      text: 'DashBoard',
      title: 'DashBoard',
      Component : 'DashBoard'
    },
    {
      text: 'My Work',
      title: 'My Work',
      Component : DashBoard
    },
    {
      text: 'Project & Tasks',
      title: 'Project & Tasks',
      Component : DashBoard
    },
    {
      text: 'People',
      title: 'People',
      Component : DashBoard
    },
    {
      text: 'Inventory',
      title: 'Inventory',
      Component : DashBoard
    },
    {
      text: 'Add User',
      title: 'Add User',
      Component : DashBoard
    }
  ];
const sideDrawer = props => {

    return(
    <nav className="side-drawer">
      <div class="container">
        <li>test</li>
      </div>
        {APP_MENU.map(({ text, title, ...rest }) => (
            <li>{title}</li>
        ))}
    </nav>
    )
};

export default sideDrawer