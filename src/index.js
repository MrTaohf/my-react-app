import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider } from 'react-redux';
import { Router, Route, browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import store from './store';
import HomeContainer from './home/HomeContainer';
import Search from './search/Search';
import Container from './app/Container';

// history
const history = syncHistoryWithStore(browserHistory, store);

ReactDOM.render(
    <Provider store={store}>
        <Router history={history}>
            <Route exact path="/" component={HomeContainer}/>
            <Route exact path="/app" component={Container}/>
            <Route path="/search" component={Search}/>
        </Router>
    </Provider>,
    document.getElementById('root')
);
