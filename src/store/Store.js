import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import apiReducer from './reducers/ApiReducer';
import UnsplashReducer from './reducers/UnsplashReducer';
import { favListReducer } from './reducers/FavListReducer';

const appReducers = combineReducers({
  data: apiReducer,
  imagesBG: UnsplashReducer,
  favList: favListReducer,
});

const logger = createLogger();

export const store = createStore(appReducers, applyMiddleware(thunk, logger));
