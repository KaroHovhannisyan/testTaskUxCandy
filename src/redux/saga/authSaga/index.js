import { call, put } from 'redux-saga/effects';
import {ATTEMPT_LOGIN, loginFailed, loginSuccess} from "../../actions";
import Api from "../../../api";

function* authSaga({ type, payload }) {
    switch (type) {
        case ATTEMPT_LOGIN: {
            alert(type);
            try {
                const user = yield call(Api.login, payload);
                yield put(loginSuccess(user));
            } catch (e) {
                yield put(loginFailed(e));
            }
        }
    }
}

export default authSaga;
