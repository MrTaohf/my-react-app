import React, { Component, PropTypes } from 'react';
import logo from './logo.svg';
import './App.css';
import { Button } from "antd";

// React Component
class App extends Component {
    render() {
        const { value, addNumber, deleteNumber, test, demo } = this.props;
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
                <Button type='primary' icon='download' onClick={test}>Test Number</Button><br/><br/>
                <Button type='primary' icon='download' onClick={demo('养大年')}>Test Number</Button><br/>
            </div>
        );
    }
}

App.propTypes = {
    value: PropTypes.string.isRequired,
    addNumber: PropTypes.func.isRequired,
    deleteNumber: PropTypes.func.isRequired,
    test: PropTypes.func.isRequired,
    demo: PropTypes.func.isRequired
};

App.defaultProps = {
    value: '张三',
    addNumber: null,
    deleteNumber: null,
    test: null,
    demo: null
};

export default App;
