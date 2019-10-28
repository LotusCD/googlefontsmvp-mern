import { FETCH_GOOGLE_API } from './../actions/action-types';

export default function fetchDBData(state = [], action) {
  switch (action.type) {
      case FETCH_GOOGLE_API:
        return action.data;
    default:
      return state;
  }  
}
