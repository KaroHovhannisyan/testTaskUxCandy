import * as actionTypes from "../actions";
const defaultState = {
    isLoggedIn: false,
    tasks: null,
    user: null
};

const mainReducer = (state = defaultState, action) => {
    switch (action.type) {
        case actionTypes.GET_TASKS_SUCCESS:
            return {
                ...state,
                tasks: action.data
            }
        case actionTypes.LOGIN_SUCCESS:
            return {
                ...state,
                user: action.user,
                isLoggedIn: true
            }
    }
    return state;
};

export default mainReducer;
