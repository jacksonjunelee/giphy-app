import * as types from './actionTypes';
import {beginAjaxCall, ajaxCallError} from './ajaxStatusActions';
import {apiKey} from '../apiKey';

export function loadHistorySuccess(gifs) {
  return {type: types.LOAD_HISTORY_SUCCESS, gifs};
}

export function updateHistorySuccess(course) {
  return {type: types.UPDATE_HISTORY_SUCCESS, course};
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
