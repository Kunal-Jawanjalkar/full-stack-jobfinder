import {call, select, put} from '@redux-saga/core/effects';
import {ICompanyDetails} from '../../@types/@company';
import {getToken, apiRequest, companySignupApi} from '../../helpers/requests';
import {
  createJobSuccess,
  createJobError,
  companyLoginSuccess,
  setCompanyDetails,
  companySignupSuccess,
  companySignupError,
  requestJobOpenings,
  JobOpeningsSuccess,
  jobOpeningsError,
} from '../companySlice';
import {RootState} from '../store';

// baseurl of the api
const baseUrl = `http://192.168.0.103:8000/api`;

// company signup handler
export function* companySignupHandler(action) {
  const response = yield call(companySignupApi, action.payload);
  console.log('signup response', response);
  yield put(companySignupSuccess());
  if (response.status >= 400) {
    yield put(companySignupError());
  }
}

// company login saga handler
export function* companyLoginHandler(action) {
  try {
    const response = yield call(apiRequest, {
      method: 'post',
      url: `${baseUrl}/company-login`,
      body: action.payload,
      headers: {'Content-Type': 'application/json'},
    });
    console.log(response);
    yield put(companyLoginSuccess());
    yield put(setCompanyDetails(response.data));
  } catch (error) {
    console.log(error);
  }
}

// Create job saga handler
export function* createJobHandler(action) {
  const token = getToken();
  const companyDetails: ICompanyDetails = yield select(
    (state: RootState) => state.company.companyDetails,
  );

  try {
    const response = yield call(apiRequest, {
      url: `${baseUrl}/create-job`,
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
        // Authorization: `Bearer ${token}`,
      },
      body: {
        ...action.payload,
        companyId: companyDetails._id,
        companyDetails: companyDetails._id,
        companyName: companyDetails.name,
      },
    });

    yield put(createJobSuccess());
  } catch (error) {
    yield put(createJobError());
  }
}

export function* getJobOpeningsHandler() {
  try {
    const companyDetails: ICompanyDetails = yield select(
      (state: RootState) => state.company.companyDetails,
    );
    const {_id} = companyDetails;
    const response = yield call(apiRequest, {
      method: 'get',
      url: `${baseUrl}/jobs/${_id}`,
      headers: {'Content-Type': 'application/json'},
    });
    yield put(JobOpeningsSuccess(response.data));
  } catch (error) {
    console.log(error);
  }
}
