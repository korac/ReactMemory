import { GUESS_CARD, GUESS_RESET, PAIR_GUESSED } from '../actions/types';

export default function(state = { pairsGuessed: [] }, action) {
  switch (action.type) {
    case GUESS_CARD:
      return { ...state, previousGuess: action.payload };
    case GUESS_RESET:
      return { ...state, previousGuess: null };
    case PAIR_GUESSED:
      return {
        ...state,
        previousGuess: null,
        pairsGuessed: [...state.pairsGuessed, action.payload]
      };
    default:
      return state;
  }
}
