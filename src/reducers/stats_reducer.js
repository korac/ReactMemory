import {
    USER_DEREGISTER,
    USER_REGISTER
} from "../actions/types";

export default function(state = { pairGuesses: 0 }, action) {
    switch(action.type) {
        case USER_REGISTER:
            return { ...state, username: action.payload };
        case USER_DEREGISTER:
            return { ...state, username: null };
        default:
            return state;
    }
}