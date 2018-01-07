import {
    USER_REGISTER,
    GUESS_CARD,
    GUESS_RESET,
    USER_DEREGISTER,
    PAIR_GUESSED
} from './types';

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
    return (dispatch, getState) => {
        const { previousGuess } = getState().guess;

        if(previousGuess && previousGuess === cardId) {
            dispatch({ type: PAIR_GUESSED, payload: cardId });
        } else if(previousGuess) {
            setTimeout(() => {
                dispatch({ type: GUESS_RESET, payload: cardId });
            }, 700);
        } else {
            dispatch({ type: GUESS_CARD, payload: cardId });
        }
    }

}