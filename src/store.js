/**
 * Created by hongfei.tao on 2017/5/18.
 */
import { createStore } from 'redux';
import reducer from './reducers';
// import { createStore, combineReducers, applyMiddleware } from 'redux';

// Store
const store = createStore(
    reducer
    /*combineReducers({
     reducer,
     router: routerReducer
     }),
     applyMiddleware(middleware)*/
);

export default store;