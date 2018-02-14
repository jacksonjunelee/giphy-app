import * as types from './actionTypes';
import {beginAjaxCall, ajaxCallError} from './ajaxStatusActions';
import {apiKey} from '../apiKey';

export function loadHistorySuccess(history) {
  return {type: types.LOAD_HISTORY_SUCCESS, history};
}

export function updateHistorySuccess(history) {
  return {type: types.UPDATE_HISTORY_SUCCESS, history};
}

export function loadHistory() {
  return function (dispatch) {
    return dispatch(loadHistorySuccess([]));
  };
}

// export function saveCourse(course) {
//   return function (dispatch, getState) {
//     dispatch(beginAjaxCall());
//     return CourseApi.saveCourse(course).then(course => {
//       course.id ? dispatch(updateCourseSuccess(course)) : dispatch(createCourseSuccess(course));
//     }).catch(error => {
//       dispatch(ajaxCallError(error));
//       throw(error);
//     });
//   };
// }
