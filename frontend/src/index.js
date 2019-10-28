import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";
import './index.css';
import {App} from './components/App/App';

//import middlewares
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger'
import thunk from 'redux-thunk';
//import actions
import { fetchGoogleApi } from './actions/index';
//import reducers
import rootReducer from './reducers/index'
//import bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';


const store = createStore(rootReducer, applyMiddleware(thunk, logger));

store.dispatch(fetchGoogleApi());

ReactDOM.render(
    <BrowserRouter>
<Provider store={store}>
<App />
</Provider></BrowserRouter>, document.getElementById('root'));
