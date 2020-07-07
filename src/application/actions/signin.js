import { history } from '../history';
import requestHandler from '../services/signin';
import { userConstants } from '../constants/user';
import { alertActions } from '../actions/alert';

export const userActions = {
  signin,
  signout
};


function signin(username, password) {
  
  return dispatch => {
      dispatch(request({ username }));
      // dispatch(success({username}));
      // localStorage.setItem('user', JSON.stringify(username));

      requestHandler.signin(username, password)
          .then(user => { 
                  dispatch(success());
                  console.log("user success" + user.status);
                  //history.replace('/home');
                  history.push('/home');
                  dispatch(alertActions.success('Registration successful'));     
              },
              error => {
                  //dispatch(failure(error.toString()));
                  dispatch(alertActions.error(error.toString()));
              }
          );
  };

  function request(user) { return { type: userConstants.LOGIN_REQUEST, user } }
  function success(user) { return { type: userConstants.LOGIN_SUCCESS, user } }
  //function failure(error) { return { type: userConstants.LOGIN_FAILURE, error } }
};

export function signout() {
  //signinService.logout();
  return { type: userConstants.LOGOUT };
}