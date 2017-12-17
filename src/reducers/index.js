import { combineReducers } from 'redux';
import guessReducer from './guess_reducer';
import statsReducer from './stats_reducer';
import { reducer as formReducer } from 'redux-form';

const rootReducer = combineReducers({
    guess: guessReducer,
    stats: statsReducer,
    form: formReducer
});

export default rootReducer;