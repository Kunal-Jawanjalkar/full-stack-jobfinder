import {call, select, put} from '@redux-saga/core/effects';
import {apiRequest} from '../../helpers/requests';
import {
  userSignupSuccess,
  userSignupError,
  userLoginSuccess,
  setUserDetails,
} from '../userSlice';

// baseurl of the api
const baseUrl = `http://192.168.0.103:8000/api`;
// const baseUrl = `http://localhost:8000/api`;

// company signup handler
export function* userSignupHandler(action) {
  try {
    const response = yield call(apiRequest, {
      method: 'post',
      url: `${baseUrl}/user-signup`,
      headers: {'Content-Type': 'application/json'},
      body: action.payload,
    });
    console.log('signup response', response);
    yield put(userSignupSuccess());
  } catch (error) {
    yield put(userSignupError());
  }
}

export function* userLoginHandler(action) {
  try {
    const response = yield call(apiRequest, {
      method: 'post',
      url: `${baseUrl}/user-login`,
      headers: {'Content-Type': 'application/json'},
      body: action.payload,
    });
    console.log(response.data, 'userinfo');
    yield put(userLoginSuccess());
    yield put(setUserDetails(response.data));
  } catch (error) {}
}
