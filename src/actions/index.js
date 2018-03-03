import {
    REGISTER_USER,
    GUESS_CARD,
    GUESS_RESET,
    UNAUTH_USER,
    PAIR_GUESSED,
    AUTH_USER
} from './types';

export function registerUser(username, history) {
    return dispatch => {
        setTimeout(() => {
            localStorage.setItem('username', username);
            dispatch({type: REGISTER_USER, payload: username});
        }, 1500);
    }
}

export function userLogout() {
    localStorage.removeItem('username');
    return { type: UNAUTH_USER };
}

export function userLogin() {
    return { type: AUTH_USER };
}

export function checkIfRegistered() {
    const username = localStorage.user;
    if(username) {
        console.log('user exists!');
        return { type: REGISTER_USER, payload: 'kox' };
    }

    console.log('no user');
    return { type: UNAUTH_USER };
}

export function guessCard(cardId, cardKey) {
    return (dispatch, getState) => {
        const { previousGuess } = getState().guess;

        if(previousGuess && previousGuess.cardKey === cardKey) {
            dispatch({ type: GUESS_RESET, payload: cardId });
        } else if(previousGuess && previousGuess.cardId === cardId) {
            dispatch({ type: PAIR_GUESSED, payload: cardId });
        } else if(previousGuess) {
            setTimeout(() => {
                dispatch({ type: GUESS_RESET, payload: cardId });
            }, 700);
        } else {
            dispatch({ type: GUESS_CARD, payload: { cardId, cardKey} });
        }
    }
}