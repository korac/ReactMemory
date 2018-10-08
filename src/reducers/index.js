import { combineReducers } from 'redux';
import guessReducer from './guess_reducer';
import statsReducer from './stats_reducer';
import modalReducer from './modal_reducer';
import { reducer as formReducer } from 'redux-form';

const rootReducer = combineReducers({
  guess: guessReducer,
  stats: statsReducer,
  modal: modalReducer,
  form: formReducer
});

export default rootReducer;
