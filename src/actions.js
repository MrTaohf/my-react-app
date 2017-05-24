/**
 * Created by hongfei.tao on 2017/5/18.
 */
// Action
export const ADD_NUMBER = 'ADD_NUMBER';
export const DELETE_NUMBER = 'DELETE_NUMBER';
export const JUMP_PAGE = 'JUMP_PAGE';

// Action Creator

export const addNumber = (value) => {
    return (dispatch) => dispatch({
        type: ADD_NUMBER,
        value
    })
}

export const deleteNumber = (value) => {
    return {
        type: DELETE_NUMBER,
        value
    }
}

// HomePage 的 Actions
export const TOGGLE_MENU = 'TOGGLE_MENU';

export const toggleMenuAction = (toggle) => {
    console.log(toggle);
    return {
        type: TOGGLE_MENU,
        toggle
    }
}
