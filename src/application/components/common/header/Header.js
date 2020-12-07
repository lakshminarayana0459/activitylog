import React from 'react';
import './Header.css'; 

const header = props => {
    // eslint-disable-next-line no-useless-constructor
    // constructor(props) {
    //     super(props);
    // }

// render(){
    return(
            <nav className="header">
            <button className="btn shadow-sml menu-button header__logo"
                 onClick={ props.drawerClickHandler }
         >
        <i className="fa fa-bars"></i>
             </button>
            {/* <button onClick={this.props.drawerToggleClickHandler}> button</button> */}
            </nav>
    )
// }
}

export default header;
