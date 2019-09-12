import { call, put } from 'redux-saga/effects';
import {ATTEMPT_GET_TASKS, getTasksSuccess, getTasksFail} from "../../actions";
import Api from "../../../api";

function* taskSaga({ type, payload }) {
    switch (type) {
        case ATTEMPT_GET_TASKS: {
            alert(type);
            try {
                const data = yield call(Api.login, payload);
                yield put(getTasksSuccess(data));
            } catch (e) {
                yield put(getTasksFail(e));
            }
        }
    }
}

export default taskSaga;