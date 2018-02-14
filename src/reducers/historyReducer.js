import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function history(state = initialState.history, action) {
  switch (action.type) {
    case types.LOAD_HISTORY_SUCCESS:
      return action.history;

    default:
      return state;
  }
}
