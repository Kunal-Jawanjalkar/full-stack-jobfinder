import {takeLatest} from '@redux-saga/core/effects';
import {
  requestCompanySignup,
  requestCompanyLogin,
  requestCreateJob,
  requestJobOpenings,
} from '../companySlice';

import {
  createJobHandler,
  companyLoginHandler,
  companySignupHandler,
  getJobOpeningsHandler,
} from '../handlers/companyhandlers';

// company signup watcher
export function* watchCompanySignup() {
  yield takeLatest(requestCompanySignup.type, companySignupHandler);
}

// company Login watcher
export function* watchCompanyLogin() {
  yield takeLatest(requestCompanyLogin.type, companyLoginHandler);
}

// create job watcher
export function* watchCreateJob() {
  yield takeLatest(requestCreateJob.type, createJobHandler);
}

// get job openings
export function* watchGetjobOpenings() {
  yield takeLatest(requestJobOpenings.type, getJobOpeningsHandler);
}
