import * as actionTypes from "../actions";
import {TOKEN} from "../../common/constants";
const defaultState = {
    isLoggedIn: !!localStorage.getItem(TOKEN),
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
        case actionTypes.LOGOUT_SUCCESS:
            return {
                ...state,
                user: null,
                isLoggedIn: false
            }
    }
    return state;
};

export default mainReducer;
