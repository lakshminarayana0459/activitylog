import { userConstants } from '../constants/user';

let user = JSON.parse(localStorage.getItem('user'));
const initialState = user ? { loggedIn: false, user } : {};

export default function signin(state = initialState, action) {
  console.log(action.user);
  switch (action.type) {
    case userConstants.LOGIN_REQUEST:
      return {
        loggingIn: false,
        user: action.user
      };
    case userConstants.LOGIN_SUCCESS:
      return {
        loggedIn: true,
        user: action.user
      };
    case userConstants.LOGIN_FAILURE:
      return {};
    case userConstants.LOGOUT:
      return {};
    default:
      return state
  }
}