/**
 * Created by hongfei.tao on 2017/5/18.
 */
import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import reducer from './reducers';
import { routerReducer } from 'react-router-redux';
import { routerMiddleware } from 'react-router-redux';
import { history } from './index';

const middleware = routerMiddleware(history);
// 中间件-redux-logger
const logger = createLogger();

// Store
const store = createStore(
    combineReducers({
        reducer,
        router: routerReducer
    }),
    applyMiddleware(middleware, thunk, logger)
);

export default store;