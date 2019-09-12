import { takeLatest } from 'redux-saga/effects'
import {ATTEMPT_LOGIN} from "../actions";
import autSaga from "./authSaga"

function* mainSaga() {
    yield takeLatest(ATTEMPT_LOGIN, autSaga);
}

export default mainSaga;
