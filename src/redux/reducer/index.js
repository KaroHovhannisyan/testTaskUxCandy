const defaultState = {
   isLoggedIn: true,
    tasks: null
};
import * as actionTypes from "../actions"

const mainReducer = (state = defaultState, action) => {
    switch (action.type) {
        case actionTypes.GET_TASKS_SUCCESS:
            return {
                ...state,
                tasks: action.data
            }
    }
    return state;
}

export default mainReducer;
