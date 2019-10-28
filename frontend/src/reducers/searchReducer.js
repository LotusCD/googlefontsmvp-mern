import * as actionType from './../actions/action-types';

const initialState = {
    font: "Ab"
};

const reducer = ( state = initialState, action ) => {
    switch ( action.type ) {
        case actionType.SEARCH_FONT:
            return {
                ...state,
                font: action.font
            }     
        default:
            return state;   
    }
    
};

export default reducer;