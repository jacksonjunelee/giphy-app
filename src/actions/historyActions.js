import * as types from './actionTypes';
import {beginAjaxCall, ajaxCallError} from './ajaxStatusActions';
import {apiKey} from '../apiKey';

export function loadHistorySuccess(history) {
  return {type: types.LOAD_HISTORY_SUCCESS, history};
}

export function createHistorySuccess(history) {
  return {type: types.CREATE_HISTORY_SUCCESS, history};
}

export function loadHistory() {
  return function (dispatch) {
    return dispatch(loadHistorySuccess([]));
  };
}

export function saveHistory(history) {
  return function (dispatch, getState) {
    return dispatch(createHistorySuccess(history));
  };
}
