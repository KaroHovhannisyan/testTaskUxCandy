import * as actionTypes from "../actions";
const defaultState = {
    isLoggedIn: false,
    tasks: null,
    user: null
};

const mainReducer = (state = defaultState, action) => {
    console.log(action, "reducer")
    switch (action.type) {
        case actionTypes.GET_TASKS_SUCCESS:
            return {
                ...state,
                tasks: action.payload
            }
        case actionTypes.LOGIN_SUCCESS:
            return {
                ...state,
                user: action.payload.message,
                isLoggedIn: true
            }
    }
    return state;
};

export default mainReducer;
