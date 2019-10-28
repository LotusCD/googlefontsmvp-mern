import * as actionType from './../actions/action-types';

const initialState = {
  text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
};

const reducer = ( state = initialState, action ) => {
    switch ( action.type ) {
        case actionType.TYPED_FONT:
            return {
                ...state,
                text: action.text === "" ? "Lorem Ipsum is simply dummy text of the printing and typesetting industry." : action.text
            }     
        default:
            return state;   
    }
    
};

export default reducer;