import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import thunk from 'redux-thunk';

import reducers from './reducers'

const token = localStorage.getItem('token');

const initialState = {
    account: {
        token
    }
};

const reducer = combineReducers({
    account: reducers.Account,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducer, initialState, composeEnhancers(applyMiddleware(thunk)));

export default store;