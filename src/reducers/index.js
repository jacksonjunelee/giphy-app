import { combineReducers } from 'redux';
import gifs from './gifReducer';
import ajaxCallsInProgress from './ajaxStatusReducer';

const rootReducer = combineReducers({
  gifs,
  ajaxCallsInProgress
});

export default rootReducer;
