import React from 'react'

import Header from './components/common/header/Header';
import SideDrawer from './components/common/sidedrawer/SideDrawer';
import BackDrop from './components/common/BackDrop/BackDrop'


class Home extends React.Component {
 state = {
    sidedrawerOpen : true
 };

    drawerToggleclick = () =>{
        this.setState((prevState) =>{
            return { sidedrawerOpen: !prevState.sidedrawerOpen };
        });
    };

    onBackDrop = () =>{
        this.setState ({ sidedrawerOpen : false});
    }

    render(){
        let sideDrawer;
        let backDrop;

         if (this.state.sidedrawerOpen) {
            sideDrawer = <SideDrawer />
            backDrop = <BackDrop click={this.onBackDrop}/>
         }

        return (
            <div>
                <Header drawerToggleClickHandler={this.drawerToggleclick}/>
                {sideDrawer}
                {backDrop}
            </div>
        )
    }
}

export default Home;