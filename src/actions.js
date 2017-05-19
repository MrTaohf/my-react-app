/**
 * Created by hongfei.tao on 2017/5/18.
 */
// Action
export const ADD_NUMBER = 'ADD_NUMBER';
export const DELETE_NUMBER = 'DELETE_NUMBER';
export const JUMP_PAGE = 'JUMP_PAGE';

// Action Creator
const createAction = (type, value) => {
    return {
        type,
        value
    }
};

export default createAction;