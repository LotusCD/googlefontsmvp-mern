import * as actionType from '../actions/action-types';

const initialState = {
    msize: "18px"
};

const reducer = ( state = initialState, action ) => {
    switch ( action.type ) {
        case actionType.SMALL_SIZE:
                return {
                    ...state,
                    msize: "18px"
                }   
        case actionType.MEDIUM_SIZE:
            return {
                ...state,
                msize: "22px"
            } 
        case actionType.BIG_SIZE:
             return {
                 ...state,
                msize: "28px"
                }  
        case actionType.EXTRA_SIZE:
            return {
                ...state,
                msize: "30px"
                }  
        default:
            return state;   
    }
    
};


export default reducer;