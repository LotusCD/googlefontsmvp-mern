import * as actionType from './action-types';

import axios from 'axios';

//API connection
//--> fetchData from API

export const fetchData = (data) => {
    return {
      type: actionType.FETCH_GOOGLE_API,
      data
    }
  };
  
export const fetchGoogleApi = () => {
    return (dispatch) => {
      return axios.get("https://www.googleapis.com/webfonts/v1/webfonts?key=YOUAPIKEY")
        .then(response => {
          dispatch(fetchData(response.data.items))
          //console.log("Action triggered " + response.data.items)
        })
        
        .catch(error => {
          throw(error);
        });
    };
  };

//Front-end interaction
//--> Search function

export function addText(text) {
    return { 
      type: actionType.TYPED_FONT,
      text: text
    };
  }
  
export function searchFont(font) {
    return { 
      type: actionType.SEARCH_FONT,
      font: font
    };
  }

//Font size functions. Used the name 'msize' for the parameter becauser the first one I tried was 'medium size'.

  export function smallSize(msize) {
    return { 
      type: actionType.SMALL_SIZE,
      msize: msize
    };
  }

export function mediumSize(msize) {
    return { 
      type: actionType.MEDIUM_SIZE,
      msize: msize
    };
  }

export function bigSize(msize) {
    return { 
      type: actionType.BIG_SIZE,
      msize: msize
    };
  }

export function extraSize(msize) {
    return { 
      type: actionType.EXTRA_SIZE,
      msize: msize
    };
  }

export * from './alert.actions';
export * from './user.actions';
  
  
