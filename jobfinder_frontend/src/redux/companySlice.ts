import {
  AnyAction,
  createSlice,
  Dispatch,
  PayloadAction,
} from '@reduxjs/toolkit';
import axios from 'axios';
import {ICompanyDetails} from '../@types/company';

interface ICompanyState {
  // company signup states
  isSignupLoading: boolean;
  isSignupSuccess: boolean;
  isSignupError: boolean;
  // company login states
  isLoginLoading: boolean;
  isLoginSuccess: boolean;
  isLoginError: boolean;
  // createjob states
  isCreateJobLoading: boolean;
  isCreateJobSuccess: boolean;
  isCreateJobError: boolean;
  // company details
  companyDetails: ICompanyDetails;
  isJobOpeningsLoading: boolean;
  isJobOpeningSuccess: boolean;
  isJobOpeningsError: boolean;
  currentJobOpenings: any[];
}

const initialState: ICompanyState = {
  // signup
  isSignupLoading: false,
  isSignupSuccess: false,
  isSignupError: false,
  // login
  isLoginLoading: false,
  isLoginSuccess: false,
  isLoginError: false,
  // createjob states
  isCreateJobLoading: false,
  isCreateJobSuccess: false,
  isCreateJobError: false,
  companyDetails: {} as ICompanyDetails,
  // request current job openinngs
  isJobOpeningsLoading: false,
  isJobOpeningSuccess: false,
  isJobOpeningsError: false,
  currentJobOpenings: [],
};

export const companySlice = createSlice({
  name: 'company',
  initialState: initialState,
  reducers: {
    requestCompanySignup: (state, action) => {
      state.isSignupLoading = true;
      state.isSignupError = false;
      state.isSignupSuccess = false;
    },
    companySignupSuccess: state => {
      return {
        ...state,
        isSignupSuccess: true,
        isSignupLoading: false,
        isSignupError: false,
      };
    },
    companySignupError: state => {
      return {
        ...state,
        isSignupSuccess: false,
        isSignupLoading: false,
        isSignupError: true,
      };
    },
    requestCompanyLogin: (state, action) => {
      return {
        ...state,
        isLoginLoading: true,
        isLoginError: false,
        isLoginSuccess: false,
      };
    },
    companyLoginSuccess: state => {
      return {
        ...state,
        isLoginLoading: false,
        isLoginError: false,
        isLoginSuccess: true,
      };
    },
    companyLoginError: state => {
      return {
        ...state,
        isLoginLoading: false,
        isLoginError: true,
        isLoginSuccess: false,
      };
    },
    setCompanyDetails: (state, action) => {
      return {...state, companyDetails: action.payload};
    },
    requestCreateJob: (state, action) => {
      return {
        ...state,
        isCreateJobLoading: true,
        isCreateJobSuccess: false,
        isCreateJobError: false,
      };
    },
    createJobSuccess: state => {
      return {
        ...state,
        isCreateJobLoading: false,
        isCreateJobSuccess: true,
        isCreateJobError: false,
      };
    },
    createJobError: state => {
      return {
        ...state,
        isCreateJobLoading: false,
        isCreateJobSuccess: false,
        isCreateJobError: true,
      };
    },
    requestJobOpenings: state => {
      return {
        ...state,
        isJobOpeningsLoading: true,
        isJobOpeningSuccess: false,
        isJobOpeningsError: false,
      };
    },
    JobOpeningsSuccess: (state, action) => {
      return {
        ...state,
        isJobOpeningsLoading: false,
        isJobOpeningSuccess: true,
        isJobOpeningsError: false,
        currentJobOpenings: action.payload,
      };
    },
    jobOpeningsError: state => {
      return {
        ...state,
        ...state,
        isJobOpeningsLoading: false,
        isJobOpeningSuccess: false,
        isJobOpeningsError: true,
      };
    },
  },
});

export const {
  requestCompanySignup,
  companySignupSuccess,
  companySignupError,
  requestCompanyLogin,
  companyLoginSuccess,
  companyLoginError,
  setCompanyDetails,
  requestCreateJob,
  createJobSuccess,
  createJobError,
  requestJobOpenings,
  JobOpeningsSuccess,
  jobOpeningsError,
} = companySlice.actions;

export default companySlice.reducer;
