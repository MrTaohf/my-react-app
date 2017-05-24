/**
 * Created by hongfei.tao on 2017/5/24.
 */
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { push } from 'react-router-redux';
import App from './App';
import { addNumber, deleteNumber } from '../actions';

// Map Redux state to component props
const mapStateToProps = state => {
    return {
        value: state.reducer.name
    }
};

// Map Redux actions to component props
const mapDispatchToProps = dispatch => {
    return {
        addNumber: bindActionCreators(addNumber, dispatch),
        deleteNumber: () => dispatch(deleteNumber('陶宏飞')),
        jumpPage: bindActionCreators(push, dispatch)
    }
};

const Container = connect(
    mapStateToProps,
    mapDispatchToProps
)(App);

export default Container;