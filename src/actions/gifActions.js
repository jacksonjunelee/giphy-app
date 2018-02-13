import * as types from './actionTypes';
import {beginAjaxCall, ajaxCallError} from './ajaxStatusActions';
import {apiKey} from '../apiKey';

export function loadGifsSuccess(gifs) {
  return {type: types.LOAD_GIFS_SUCCESS, gifs};
}

export function updateGifsSuccess(course) {
  return {type: types.UPDATE_GIFS_SUCCESS, course};
}

export function loadGifs() {
  return function (dispatch) {
    dispatch(beginAjaxCall());
    const giphyPromise =     fetch(`https://api.giphy.com/v1/gifs/trending?api_key=${apiKey}&limit=30&rating=G`);
    return giphyPromise.then(data => data.json()).then(gifs => {
      dispatch(loadGifsSuccess(gifs.data));
    }).catch(error => {
      throw(error);
    });
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
