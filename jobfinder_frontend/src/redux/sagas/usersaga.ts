import {takeLatest} from '@redux-saga/core/effects';
import {apiRequest} from '../../helpers/requests';
import {userSignupHandler, userLoginHandler} from '../handlers/userhandlers';
import {requestUserSignup, requestUserLogin} from '../userSlice';

// user signup watcher
export function* watchUserSignup() {
  yield takeLatest(requestUserSignup.type, userSignupHandler);
}

// user signup watcher
export function* watchUserLogin() {
  yield takeLatest(requestUserLogin.type, userLoginHandler);
}
