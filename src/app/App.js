import React, { PropTypes } from 'react';
import logo from '../logo.svg';
import './App.css';
import { Button } from "antd";
import request from '../request';

// React Component 纯函数的形式创建组件
const App = ({ value, addNumber, deleteNumber, jumpPage }) => {

    const push = () => {
        jumpPage('/search');
    };
    const addName = () => {
        addNumber('TAO.HONGFEI');
    };

    return (
        <div className="App">
            <div className="App-header">
                <img src={logo} className="App-logo" alt="logo"/>
                <h2>Welcome to React</h2>
            </div>
            <h1>{ value }</h1>
            <br/>
            <Button type='primary' icon='search' onClick={addName}>Add Number</Button><br/><br/>
            <Button type='primary' icon='download' onClick={deleteNumber}>Delete Number</Button><br/><br/>
            <Button type='primary' icon='heart' onClick={push}>Jump Page</Button><br/><br/>
            <Button type='primary' icon='loading' onClick={request}>Request Network</Button><br/><br/>
        </div>
    );
}

// 通过class的方式创建组件
/*class App extends Component {
 render() {
 const { value, addNumber, deleteNumber, jumpPage } = this.props;
 const push = () => {
 jumpPage('/search');
 };
 const addName = () => {
 addNumber('TAO.HONGFEI');
 };
 return (
 <div className="App">
 <div className="App-header">
 <img src={logo} className="App-logo" alt="logo"/>
 <h2>Welcome to React</h2>
 </div>
 <h1>{ value }</h1>
 <br/>
 <Button type='primary' icon='search' onClick={addName}>Add Number</Button><br/><br/>
 <Button type='primary' icon='download' onClick={deleteNumber}>Delete Number</Button><br/><br/>
 <Button type='primary' icon='heart' onClick={push}>Jump Page</Button><br/><br/>
 <Button type='primary' icon='loading' onClick={request}>Request Network</Button><br/><br/>
 </div>
 );
 }
 }*/

App.propTypes = {
    value: PropTypes.string.isRequired,
    addNumber: PropTypes.func.isRequired,
    deleteNumber: PropTypes.func.isRequired,
    jumpPage: PropTypes.func.isRequired
};

App.defaultProps = {
    value: 'DataYes',
    addNumber: null,
    deleteNumber: null,
    jumpPage: null
};

export default App;
