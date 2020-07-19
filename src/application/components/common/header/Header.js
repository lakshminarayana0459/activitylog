import React from 'react';
import './Header.css'; 

class header extends React.Component {
    // eslint-disable-next-line no-useless-constructor
    constructor(props) {
        super(props);
    }

render(){
    return(
        <header className="header">
            <nav className="navbar navbar-default">
            <button className="btn shadow-sml menu-button header__logo"
        onClick={ this.props.drawerToggleClickHandler }
      >
        <i className="fa fa-bars"></i>
             </button>
            {/* <button onClick={this.props.drawerToggleClickHandler}> button</button> */}
            </nav>
       </header>
    )
}
}

export default header;
