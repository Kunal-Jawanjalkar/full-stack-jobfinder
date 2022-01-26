const ROUTES = {
  // auth routes
  COMPANY_LOGIN: "/company-login",
  COMPANY_SIGNUP: "/company-signup",
  USER_LOGIN: "/user-login",
  USER_SIGNUP: "/user-signup",
  // job routes
  CREATE_JOB: "/create-job",
  GET_JOB_BY_ID: "/job/:jobId",
  GET_JOB_BY_CATEGORY_AND_LOCATION: "/searchJobs",
  APPLY_FOR_JOB: "/job/:jobId",
  JOBS_BY_COMPANY_ID: "/jobs/:companyId",
  // get by id
  GET_USER_BY_ID: "/user/:userId",
  GET_COMPANY_BY_ID: "/company/:companyId",
};

module.exports = ROUTES;
