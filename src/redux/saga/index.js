import { takeLatest } from 'redux-saga/effects'
import {ATTEMPT_LOGIN, ATTEMPT_POST_TASK} from "../actions";
import autSaga from "./authSaga"
import taskSaga from "./taskSaga"

function* mainSaga() {
    yield takeLatest(ATTEMPT_LOGIN, autSaga);
    yield takeLatest(ATTEMPT_POST_TASK, taskSaga);
}

export default mainSaga;
