import signin from './signin';
import { combineReducers}  from 'redux';
import { CLEAR_STORE } from "../constants/common";

const allReducers = combineReducers({
    signin
});

const rootReducer = (state, action) => {
  if (action.type === CLEAR_STORE) {
    /*
     * Reducers are supposed to return the initial state when they are called
     * with undefined as the first argument, no matter the action.
     * Let’s use this fact to conditionally strip the accumulated state as we
     * pass it to appReducer. Now, whenever CLEAR_STORE fires, all reducers will
     * be initialized anew.
     */
    state = undefined;
  }
  return allReducers(state, action);
};

 export default rootReducer;