import { call, put } from 'redux-saga/effects';
import {ATTEMPT_GET_TASKS, postTaskSuccess, getTasksFail, ATTEMPT_POST_TASK, postTaskFail} from "../../actions";
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
        }
    }
}

export default taskSaga;