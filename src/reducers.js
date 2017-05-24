/**
 * Created by hongfei.tao on 2017/5/18.
 */
import { ADD_NUMBER, DELETE_NUMBER, JUMP_PAGE, TOGGLE_MENU } from './actions';
import { push } from 'react-router-redux';

// Reducer
const reducer = (state = {}, action) => {
    switch (action.type) {
        case ADD_NUMBER:
        case DELETE_NUMBER:
            return { name: action.value };
        case JUMP_PAGE:
            return { jumpPage: push };
        case TOGGLE_MENU:
            return { sideCollapsed: !action.toggle };
        default:
            return state;
    }
};

export default reducer;