import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function gifs(state = initialState.gifs, action) {
  switch (action.type) {
    case types.LOAD_COURSES_SUCCESS:
      return action.gifs;

    default:
      return state;
  }
}
