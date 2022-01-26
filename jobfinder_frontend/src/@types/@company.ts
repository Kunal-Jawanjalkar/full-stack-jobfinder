export interface ICompanyDetails {
  jwt: {
    token: String;
  };
  _id: String;
  email: String;
  name: String;
  phoneNumber: String;
  location: String;
  category: String;
  description?: String;
}

export interface ICompanyState {
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
