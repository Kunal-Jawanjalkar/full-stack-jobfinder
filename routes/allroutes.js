const ROUTES = {
  // auth routes
  COMPANY_LOGIN: "/company-login",
  COMPANY_SIGNUP: "/company-signup",
  USER_LOGIN: "/user-login",
  USER_SIGNUP: "/user-signup",
  // job routes
  CREATE_JOB: "/create-job",
  GET_JOB_BY_ID: "/:jobId",
  GET_JOB_BY_CATEGORY_AND_LOCATION: "/",
  APPLY_FOR_JOB: "/:jobId",
};

module.exports = ROUTES;