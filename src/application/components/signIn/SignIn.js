import React, { useState } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { useHistory } from 'react-router-dom';
import { signin, signout } from '../../actions/signin';

const SignIn = (props) => {

    const history = useHistory();

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const onSubmit = (e) => {
        e.preventDefault();
        props.signin(username, password).then(() => {
            history.push("/home");
        }).catch((err) => {
            console.log(err);
        });
    }

    // render(){
    //   const { username, password, submitted } = this.state;
    return (
        <div className="col-md-6 col-md-offset-3">
            <h2>Login</h2>
            <form name="form" >
                <div className={'form-group' + (!username ? ' has-error' : '')}>
                    <label htmlFor="username">Username</label>
                    <input type="text" className="form-control" name="username" value={username} onChange={(e) => setUsername(e.target.value)} />
                    {/* { !username &&
                          <div className="help-block">Username is required</div>
                      } */}
                </div>
                <div className={'form-group' + (!password ? ' has-error' : '')}>
                    <label htmlFor="password">Password</label>
                    <input type="password" className="form-control" name="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                    {/* { !password &&
                          <div className="help-block">Password is required</div>
                      } */}
                </div>
                <div className="form-group">
                    <button className="btn btn-primary" onClick={onSubmit}>Login</button>
                </div>
            </form>
        </div>
    );
    //}
}

const mapStateToProps = state => {
    const { loggedIn } = state.signin;
    return { loggedIn };
}

const mapDispatchToProps = dispatch => {
    return {
        signin: bindActionCreators(signin, dispatch),
        signout: signout
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);