/**
 * Created by hongfei.tao on 2017/5/18.
 */
import { ADD_NUMBER, DELETE_NUMBER, TEST } from './actions';

// Reducer
const reducer = (state = {}, action) => {
    switch (action.type) {
        case ADD_NUMBER:
        case DELETE_NUMBER:
        case TEST:
            return { name: action.value };
        default:
            return state;
    }
};

export default reducer;