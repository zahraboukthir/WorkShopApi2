import {createStore,compose,applyMiddleware} from 'redux'
import {receipReducer} from './receipReducer'
import thunk from "redux-thunk"
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store=createStore(receipReducer,composeEnhancers(applyMiddleware(thunk)))