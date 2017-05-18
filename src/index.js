import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import { createStore, combineReducers, applyMiddleware } from 'redux';
import { createStore } from 'redux';
import { Provider, connect } from 'react-redux';
// import createHistory from 'history/createBrowserHistory';
import App from './App';
// import { Route } from 'react-router';
// import { ConnectedRouter, routerReducer, routerMiddleware } from 'react-router-redux';
// import SearchComponent from './Search';

// Action
const ADD_NUMBER = 'ADD_NUMBER';
const DELETE_NUMBER = 'DELETE_NUMBER';
const TEST = 'TEST';
const DEMO = 'DEMO';

const ADD_ACTION = {
    type: ADD_NUMBER
};
const DELETE_ACTION = {
    type: DELETE_NUMBER
};
const TEST_ACTION = {
    type: TEST,
    value: '陶宏飞'
};

// Action Creator
const createAction = (value) => {
    return {
        type: DEMO,
        value: value
    }
};

// history
// const history = createHistory();
// middleware
// const middleware = routerMiddleware(history);

// Reducer
const reducer = (state = {}, action) => {
    switch (action.type) {
        case ADD_NUMBER:
            return { name: 'TAO.HONGFEI' };
        case DELETE_NUMBER:
            return { name: 'HONGFEI.TAO' };
        case TEST:
            return { name: action.value };
        case DEMO:
            return { name: action.value };
        default:
            return state;
    }
};

// Store
const store = createStore(
    reducer
    /*combineReducers({
     reducer,
     router: routerReducer
     }),
     applyMiddleware(middleware)*/
);

// Map Redux state to component props
const mapStateToProps = state => {
    return {
        value: state.name
    }
};

// Map Redux actions to component props
const mapDispatchToProps = dispatch => {
    return {
        addNumber: () => dispatch(ADD_ACTION),
        deleteNumber: () => dispatch(DELETE_ACTION),
        test: () => dispatch(TEST_ACTION),
        demo: (value) => dispatch(createAction(value))
    }
};

const Container = connect(
    mapStateToProps,
    mapDispatchToProps
)(App);

ReactDOM.render(
    <Provider store={store}>
        {/*<ConnectedRouter history={history}>
         <div>
         <Route exact path="/" component={Container}/>
         <Route path="/search" component={SearchComponent}/>
         </div>
         </ConnectedRouter>*/}
        <Container/>
    </Provider>,
    document.getElementById('root')
);
