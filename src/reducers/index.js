import { combineReducers } from 'redux';
import guessReducer from './guess_reducer';
import statsReducer from './stats_reducer';

const rootReducer = combineReducers({
    guess: guessReducer,
    stats: statsReducer
});

export default rootReducer;