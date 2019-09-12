import { call, put } from 'redux-saga/effects';
import {
    postTaskSuccess,
    postTaskFail,
    ATTEMPT_POST_TASK, ATTEMPT_GET_TASKS, getTasksSuccess
} from "../../actions";
import Api from "../../../api";

function* taskSaga({ type, payload }) {
    switch (type) {
        case ATTEMPT_POST_TASK: {
            try {
                const data = yield call(Api.postTask, payload);
                yield put(postTaskSuccess(data));
            } catch (e) {
                yield put(postTaskFail(e));
            }
            break;
        }
        case ATTEMPT_GET_TASKS: {
            try {
                const data = yield call(Api.getTasks, payload);
                yield put(getTasksSuccess(data));
            } catch (e) {
                yield put(postTaskFail(e));
            }
            break;
        }
    }
}

export default taskSaga;