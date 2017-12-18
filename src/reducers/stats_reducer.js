import { INCREMENT_PAIR_COUNTER, USER_DEREGISTER, USER_REGISTER } from "../actions/types";

export default function(state = { pairGuesses: 0 }, action) {
    switch(action.type) {
        case USER_REGISTER:
            return { ...state, username: action.payload };
        case USER_DEREGISTER:
            return { ...state, username: null };
        case INCREMENT_PAIR_COUNTER:
            console.log('------');
            const a = { ...state, pairGuesses: state.pairGuesses++ };
            console.log(a);
            console.log('------');
            return { ...state, pairGuesses: state.pairGuesses++ };
        default:
            return state;
    }
}