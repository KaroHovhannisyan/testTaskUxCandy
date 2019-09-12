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
            };
        case actionTypes.POST_TASK_SUCCESS:
            return {
                ...state,
                postAdded: true
            };
        case actionTypes.LOGIN_SUCCESS:
            return {
                ...state,
                user: action.payload.message,
                isLoggedIn: true
            };
    }
    return state;
};

export default mainReducer;
