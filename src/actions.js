/**
 * Created by hongfei.tao on 2017/5/18.
 */
// Action
export const ADD_NUMBER = 'ADD_NUMBER';
export const DELETE_NUMBER = 'DELETE_NUMBER';
export const TEST = 'TEST';

// Action Creator
const createAction = (type, value) => {
    return {
        type,
        value
    }
};

export default createAction;