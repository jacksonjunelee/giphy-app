import * as types from './actionTypes';
import {beginAjaxCall, ajaxCallError} from './ajaxStatusActions';
import {apiKey} from '../apiKey';

export function loadGifsSuccess(gifs) {
  return {type: types.LOAD_GIFS_SUCCESS, gifs};
}

export function loadGifs() {
  return function (dispatch) {
    dispatch(beginAjaxCall());
    const giphyPromise =     fetch(`https://api.giphy.com/v1/gifs/trending?api_key=${apiKey}&limit=32&rating=G`);
    return giphyPromise.then(data => data.json()).then(gifs => {
      dispatch(loadGifsSuccess(gifs.data));
    }).catch(error => {
      throw(error);
    });
  };
}
