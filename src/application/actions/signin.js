import { history } from '../history';
import { signinApi } from '../services/signin';
import { userConstants } from '../constants/user';
import { alertActions } from '../actions/alert';
import { useDispatch, useSelector } from 'react-redux';


// export const userActions = {
//   signin,
//   signout
// };


export function signin(username, password) {
  return dispatch => {
    dispatch(request({ username }));
    // dispatch(success({username}));
    // localStorage.setItem('user', JSON.stringify(username));

    return signinApi(username, password)
      .then(user => {
        dispatch(success());
        console.log("user success" + user.status);
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