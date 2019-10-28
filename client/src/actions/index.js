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
      return axios.get("https://www.googleapis.com/webfonts/v1/webfonts?key=AIzaSyAvocOLhfKzfe38CKqgjMf20y6WQUFI9Jc")
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

export * from './alert.actions';
export * from './user.actions';
  
  
