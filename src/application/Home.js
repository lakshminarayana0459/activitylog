import React, { useContext } from 'react'
import { store } from '../application/helper/store';
import { connect } from 'react-redux';
import { SideBarContext } from "../application/Main"

const Home = (props) => {

    const context = useContext(SideBarContext);

    return (
        <div >
            <h2>{props.user?.username} {props.user?.username}</h2>
            <h3>
                `${context.isOpen === true ? "true" : "false"}`</h3>
        </div>

    )
}

const mapStateToProps = state => {
    const { user } = state.signin;
    return { user };
}

export default connect(mapStateToProps)(Home);