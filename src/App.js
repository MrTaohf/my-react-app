import React, { Component } from 'react';
import PropTypes from 'prop-types';
import logo from './logo.svg';
import './App.css';
import { Button } from "antd";
import request from './request';

// React Component
class App extends Component {
    render() {
        const { value, addNumber, deleteNumber, test } = this.props;
        return (
            <div className="App">
                <div className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h2>Welcome to React</h2>
                </div>
                <h1>{ value }</h1>
                <br/>
                <Button type='primary' icon='search' onClick={addNumber}>Add Number</Button><br/><br/>
                <Button type='primary' icon='download' onClick={deleteNumber}>Delete Number</Button><br/><br/>
                <Button type='primary' icon='heart' onClick={test}>Test Number</Button><br/><br/>
                <Button type='primary' icon='loading' onClick={request}>Request Network</Button><br/><br/>
            </div>
        );
    }
}

App.propTypes = {
    value: PropTypes.string.isRequired,
    addNumber: PropTypes.func.isRequired,
    deleteNumber: PropTypes.func.isRequired,
    test: PropTypes.func.isRequired,
    request: PropTypes.func.isRequired
};

App.defaultProps = {
    value: '张三',
    addNumber: null,
    deleteNumber: null,
    test: null,
    request: null
};

export default App;
