import { FETCH_USER } from '../actions/types';
//add LOGOUT_USER to import for AJAX REQUEST

export default function(state = null, action) {
    switch(action.type) {
        case FETCH_USER:
            return action.payload || false;
        /*
        FOR AJAX REQUEST LOGGING OUT
        case LOGOUT_USER:
            return false;
        */
        default:
            return state;
    }
}