import { USER_REGISTER, GUESS_CARD, GUESS_RESET, INCREMENT_PAIR_COUNTER, USER_DEREGISTER } from './types';

export function registerUser(username, history) {
    return dispatch => {
        setTimeout(() => {
            dispatch({type: USER_REGISTER, payload: username});
        }, 1500);
    }
}

export function deregisterUser() {
    return {
        type: USER_DEREGISTER
    }
}

export function guessCard(cardId) {
    return {
        type: GUESS_CARD,
        payload: cardId
    };
}

export function guessReset() {
    return { type: GUESS_RESET };
}

export function pairGuessed() {
    return { type: INCREMENT_PAIR_COUNTER };
}