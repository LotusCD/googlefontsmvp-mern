import { combineReducers } from 'redux';
import data from './ApiReducer';
import writeReducer from './writeReducer';
import searchReducer from './searchReducer';
import { authentication } from './authentication.reducer';
import { registration } from './registration.reducer';
import { users } from './users.reducer';
import { alert } from './alert.reducer';



export default combineReducers({
    data,
    writeReducer,
    searchReducer,
    authentication,
    registration,
    users,
    alert
});