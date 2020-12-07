import React, { useState } from "react";

import { Router } from "react-router-dom";

import { store } from "../application/helper/store";
import { history } from "../application/history";

import Routes, { getRoutes } from "../application/routes/Routes";
import SideDrawer from "./components/common/sidedrawer/SideDrawer";
import BackDrop from "./components/common/BackDrop/BackDrop";
import { useLocation } from 'react-router-dom';

import Header from "../application/components/common/header/Header";

export const SideBarContext = React.createContext([{
    isOpen: false
}])

const Main = (props) => {

    const location = useLocation();

    const [sidedrawerOpen, setSidedrawerOpen] = useState(true);

    const drawerToggleClickHandler = () => {
        setSidedrawerOpen(true);
    };

    const backDropClick = () => {
        setSidedrawerOpen(false);
    };

    return (
        <SideBarContext.Provider value={{ isOpen: sidedrawerOpen }}>
            {
                location.pathname !== "/login" &&
                <Header drawerClickHandler={drawerToggleClickHandler} />
            }
            {sidedrawerOpen && location.pathname !== "/login" && (
                <>
                    <SideDrawer toggleShow={() => {
                        setSidedrawerOpen(!sidedrawerOpen);
                    }} show={props.sidedrawerOpen} />
                    <BackDrop onClick={backDropClick} />
                </>
            )}
            <Routes />
        </SideBarContext.Provider>
    );
};

export default Main;
