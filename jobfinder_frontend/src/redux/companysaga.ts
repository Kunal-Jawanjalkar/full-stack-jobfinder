import {all, call, put, takeLatest} from '@redux-saga/core/effects';
import {
  requestCompanySignup,
  companySignupSuccess,
  companySignupError,
  requestCompanyLogin,
  companyLoginSuccess,
  setCompanyDetails,
  requestCreateJob,
  createJobError,
  createJobSuccess,
} from './companySlice';
import {companySignupApi} from '../helpers/companyRequest';
import {apiRequest, getToken} from '../helpers/companyRequest';

// baseurl of the api
const baseUrl = `http://localhost:8000/api`;

// company signup watcher
function* watchCompanySignup() {
  yield takeLatest(requestCompanySignup.type, companySignupHandler);
}

// company signup handler
function* companySignupHandler(action) {
  const response = yield call(companySignupApi, action.payload);
  console.log('signup response', response);
  yield put(companySignupSuccess());
  if (response.status >= 400) {
    yield put(companySignupError());
  }
}

// company Login watcher
function* watchCompanyLogin() {
  yield takeLatest(requestCompanyLogin.type, companyLoginHandler);
}

function* companyLoginHandler(action) {
  const response = yield call(apiRequest, {
    method: 'post',
    url: `${baseUrl}/company-login`,
    body: action.payload,
    headers: {'Content-Type': 'application/json'},
  });
  console.log(response);
  yield put(companyLoginSuccess());
  yield put(setCompanyDetails(response.data));
}

// create job watcher
function* watchCreateJob() {
  yield takeLatest(requestCreateJob.type, createJobHandler);
}

function* createJobHandler(action) {
  const token = getToken();
  const response = yield call(apiRequest, {
    url: `${baseUrl}/create-job`,
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    body: action.payload,
  });
  console.log('createjob res', response);
}

export default function* rootSaga() {
  yield all([watchCompanySignup(), watchCompanyLogin(), watchCreateJob()]);
}
