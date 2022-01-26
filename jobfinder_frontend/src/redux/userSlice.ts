import {createSlice} from '@reduxjs/toolkit';
import {IUserState} from '../@types/@user';

const initialState: IUserState = {
  isUserSignupLoading: false,
  isUserSignupError: false,
  isUserSignupSuccess: false,
  userDetails: {},
  //   login
  isUserLoginLoading: false,
  isUserLoginSuccess: false,
  isUserLoginError: false,
};

export const userSlice = createSlice({
  name: 'user',
  initialState: initialState,
  reducers: {
    resetUserState: state => {
      return {...initialState};
    },
    requestUserSignup: (state, action) => {
      return {
        ...state,
        isUserSignupLoading: true,
        isUserSignupError: false,
        isUserSignupSuccess: false,
      };
    },
    userSignupSuccess: state => {
      return {
        ...state,
        isUserSignupLoading: false,
        isUserSignupError: false,
        isUserSignupSuccess: true,
      };
    },
    userSignupError: state => {
      return {
        ...state,
        isUserSignupLoading: false,
        isUserSignupError: true,
        isUserSignupSuccess: false,
      };
    },
    // login
    requestUserLogin: (state, action) => {
      return {
        ...state,
        isUserLoginLoading: true,
        isUserLoginError: false,
        isUserLoginSuccess: false,
      };
    },
    userLoginSuccess: state => {
      return {
        ...state,
        isUserLoginLoading: false,
        isUserLoginError: false,
        isUserLoginSuccess: true,
      };
    },
    userLoginError: state => {
      return {
        ...state,
        isUserLoginLoading: false,
        isUserLoginError: true,
        isUserLoginSuccess: false,
      };
    },
    setUserDetails: (state, action) => {
      return {
        ...state,
        userDetails: action.payload,
      };
    },
  },
});

export const {
  resetUserState,
  requestUserSignup,
  userSignupError,
  userSignupSuccess,
  requestUserLogin,
  userLoginError,
  userLoginSuccess,
  setUserDetails,
} = userSlice.actions;

export default userSlice.reducer;
