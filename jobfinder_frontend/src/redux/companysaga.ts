import {all, takeLatest} from '@redux-saga/core/effects';
import {
  requestCompanySignup,
  requestCompanyLogin,
  requestCreateJob,
  requestJobOpenings,
} from './companySlice';

import {
  createJobHandler,
  companyLoginHandler,
  companySignupHandler,
  getJobOpeningsHandler,
} from './handlers/company';

// company signup watcher
function* watchCompanySignup() {
  yield takeLatest(requestCompanySignup.type, companySignupHandler);
}

// company Login watcher
function* watchCompanyLogin() {
  yield takeLatest(requestCompanyLogin.type, companyLoginHandler);
}

// create job watcher
function* watchCreateJob() {
  yield takeLatest(requestCreateJob.type, createJobHandler);
}

// get job openings
function* watchGetjobOpenings() {
  yield takeLatest(requestJobOpenings.type, getJobOpeningsHandler);
}

export default function* rootSaga() {
  yield all([
    watchCompanySignup(),
    watchCompanyLogin(),
    watchCreateJob(),
    watchGetjobOpenings(),
  ]);
}
