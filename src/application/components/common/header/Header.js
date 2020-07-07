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
            <nav className="header__navigation">
                <button onClick={this.props.drawerToggleClickHandler}> button</button>
                <div className="header__logo"><a href="/">The LOGO</a></div>
                <div>text</div>
            </nav>
        </header>
    )
}
}

export default header;
