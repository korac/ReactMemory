import { GUESS_CARD, GUESS_RESET } from "../actions/types";

export default function(state = [], action) {
    switch(action.type) {
        case GUESS_CARD:
            return [ ...state, action.payload ];
        case GUESS_RESET:
            return [];
        default:
            return state;
    }
}