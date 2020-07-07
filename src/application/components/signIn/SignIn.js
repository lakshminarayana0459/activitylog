import React from 'react';
import {connect} from 'react-redux';
//import PropTypes from 'prop-types';
import { userActions } from '../../actions/signin';

class SignIn extends React.Component {
      constructor(props) {
        super(props);
        this.state = {
          username :'',
          password :'',
          errors : {},
          isLaoding : false,
        };
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
      } 

      onChange(e) {
        this.setState({ [e.target.name]: e.target.value });
      }

      onSubmit(e) {
        e.preventDefault();
        this.setState({isLaoding : true});
        const { username, password } = this.state;
        this.props.signin(username, password);
      }

    render(){
     //const { loggingIn } = this.props;
      const { username, password, submitted } = this.state;
      return (
          <div className="col-md-6 col-md-offset-3">
              <h2>Login</h2>
              <form name="form" onSubmit={this.handleSubmit}>
                  <div className={'form-group' + (submitted && !username ? ' has-error' : '')}>
                      <label htmlFor="username">Username</label>
                      <input type="text" className="form-control" name="username" value={username} onChange={this.onChange} />
                      {submitted && !username &&
                          <div className="help-block">Username is required</div>
                      }
                  </div>
                  <div className={'form-group' + (submitted && !password ? ' has-error' : '')}>
                      <label htmlFor="password">Password</label>
                      <input type="password" className="form-control" name="password" value={password} onChange={this.onChange} />
                      {submitted && !password &&
                          <div className="help-block">Password is required</div>
                      }
                  </div>
                  <div className="form-group">
                      <button className="btn btn-primary" onClick={this.onSubmit}>Login</button>
                  </div>
              </form>
          </div>
      );
  }
}

function mapState(state) {
  const { loggedIn } = state.signin;
  return { loggedIn };
}

const actionCreators = {
  signin: userActions.signin,
  signout: userActions.signout
};

 export default connect(mapState,actionCreators)(SignIn);