/**
 * Created by hongfei.tao on 2017/5/24.
 */
import { connect } from 'react-redux';
import HomePage from './HomePage';
import { toggleMenuAction } from '../actions';

const mapStateToProps = (state) => {
    console.log(state);
    return {
        sideCollapsed: state.reducer.sideCollapsed
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        menuToggle: toggle => dispatch(toggleMenuAction(toggle))
    }
}

const HomeContainer = connect(
    mapStateToProps, mapDispatchToProps
)(HomePage);

export default HomeContainer;