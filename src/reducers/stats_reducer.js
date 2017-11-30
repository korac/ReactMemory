import { INCREMENT_PAIR_COUNTER } from "./types";

export default function(state = { pairGuesses: 0 }, action) {
    switch(action.type) {
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