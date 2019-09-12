import { call, put } from 'redux-saga/effects';
import {ATTEMPT_LOGIN, loginFailed, loginSuccess} from "../../actions";
import Api from "../../../api";
import {history} from "../../../common/getAppConfigurations";
import {TABLE_PATH, TOKEN} from "../../../common/constants";

function* authSaga({ type, payload }) {
    switch (type) {
        case ATTEMPT_LOGIN: {
            try {
                const user = yield call(Api.login, payload);
                localStorage.setItem(TOKEN, user.data.message.token);
                yield put(loginSuccess(user.data));
                history.push(TABLE_PATH);
            } catch (e) {
                yield put(loginFailed(e));
            }
        }
    }
}

export default authSaga;
