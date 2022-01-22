import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import apiReducer from './reducers/ApiReducer';

const appReducers = combineReducers({
  data: apiReducer,
});

const logger = createLogger();

export const store = createStore(appReducers, applyMiddleware(thunk, logger));
