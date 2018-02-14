import { combineReducers } from 'redux';
import gifs from './gifReducer';
import ajaxCallsInProgress from './ajaxStatusReducer';
import history from './historyReducer';

const rootReducer = combineReducers({
  gifs,
  ajaxCallsInProgress,
  history
});

export default rootReducer;
