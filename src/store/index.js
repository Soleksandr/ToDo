import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import reducers from './../reducers/index';

/* eslint-disable no-underscore-dangle */
const store = createStore(
  reducers,
  applyMiddleware(logger),
);
/* eslint-enable */

export default store;
