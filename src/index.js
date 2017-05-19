import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider, connect } from 'react-redux';
import createHistory from 'history/createBrowserHistory';
import App from './App';
import { Route } from 'react-router';
import { ConnectedRouter } from 'react-router-redux';
import createAction, { ADD_NUMBER, DELETE_NUMBER, JUMP_PAGE } from './actions';
import store from './store';
import Search from './Search';

// history
export const history = createHistory();

// Map Redux state to component props
const mapStateToProps = state => {
    return {
        value: state.reducer.name
    }
};

// Map Redux actions to component props
const mapDispatchToProps = dispatch => {
    return {
        addNumber: () => dispatch(createAction(ADD_NUMBER, 'TAO.HONGFEI')),
        deleteNumber: () => dispatch(createAction(DELETE_NUMBER, '陶宏飞')),
        jumpPage: (path) => dispatch(createAction(JUMP_PAGE, path))
    }
};

const Container = connect(
    mapStateToProps,
    mapDispatchToProps
)(App);

ReactDOM.render(
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <div>
                <Route exact path="/" component={Container}/>
                <Route path="/search" component={Search}/>
            </div>
        </ConnectedRouter>
    </Provider>,
    document.getElementById('root')
);
