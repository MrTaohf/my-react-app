import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider, connect } from 'react-redux';
// import createHistory from 'history/createBrowserHistory';
import App from './App';
// import { Route } from 'react-router';
// import { ConnectedRouter, routerReducer, routerMiddleware } from 'react-router-redux';
import createAction, { ADD_NUMBER, DELETE_NUMBER, TEST, REQUEST } from './actions';
import store from './store';

// history
// const history = createHistory();
// middleware
// const middleware = routerMiddleware(history);

// Map Redux state to component props
const mapStateToProps = state => {
    return {
        value: state.name
    }
};

// Map Redux actions to component props
const mapDispatchToProps = dispatch => {
    return {
        addNumber: () => dispatch(createAction(ADD_NUMBER, 'TAO.HONGFEI')),
        deleteNumber: () => dispatch(createAction(DELETE_NUMBER, 'HONGFEI.TAO')),
        test: () => dispatch(createAction(TEST, '陶宏飞')),
        request: () => dispatch(createAction(REQUEST, ''))
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
