export function user(state = {}, action){
    switch (action.type) {
        case userConstants.GETALL_REQUEST:
            return {
                loading: true
          };
        case userConstants.GETALL_SUCCESS:
            return {
                items: action.users
             };
        default:
            return state
};