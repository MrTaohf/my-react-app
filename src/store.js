/**
 * Created by hongfei.tao on 2017/5/18.
 */
import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import reducer from './reducers';
import { browserHistory } from 'react-router';
import { routerReducer, routerMiddleware } from 'react-router-redux';

const middleware = routerMiddleware(browserHistory);
// 中间件-redux-logger
const logger = createLogger();

// Store
const store = createStore(
    combineReducers({
        reducer,
        routing: routerReducer
    }),
    applyMiddleware(middleware, thunk, logger)
);

export default store;