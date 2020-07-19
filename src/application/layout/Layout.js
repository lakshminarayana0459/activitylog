import React from 'react';

import Aux from './AUX';
import Header from '../components/common/header/Header';
import { render } from '@testing-library/react';

import SideDrawer from "../components/common/sidedrawer/SideDrawer";
import BackDrop from "../components/common/BackDrop/BackDrop";



class Layout extends React.Component {
    constructor(props) {
        super(props);
        this.state ={
            sidedrawerOpen : true
        }
    }
    
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
        return(
            <Aux>
             <Header drawerToggleClickHandler={this.drawerToggleclick}/>
             {sideDrawer}
             {backDrop}
             <main>
                  {this.props.children}
             </main>
         </Aux>
        )
    }

}

export default Layout;