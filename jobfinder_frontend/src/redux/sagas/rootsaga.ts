import {all} from '@redux-saga/core/effects';
import {
  watchCompanyLogin,
  watchCompanySignup,
  watchCreateJob,
  watchGetjobOpenings,
} from './companysaga';
import {watchUserLogin, watchUserSignup} from './usersaga';

export default function* rootSaga() {
  yield all([
    //  company watchers
    watchCompanySignup(),
    watchCompanyLogin(),
    watchCreateJob(),
    watchGetjobOpenings(),
    // user watchers
    watchUserSignup(),
    watchUserLogin(),
  ]);
}
