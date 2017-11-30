import { GUESS_CARD, GUESS_RESET, INCREMENT_PAIR_COUNTER } from '../reducers/types';

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