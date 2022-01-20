const express = require("express");
const router = express.Router();
const {
  userSignup,
  companySignup,
  userLogin,
  companyLogin,
} = require("../controllers/auth");

const ROUTES = require("./allroutes");

// User Signup route
router.post(ROUTES.USER_SIGNUP, userSignup);

// User login route
router.post(ROUTES.USER_LOGIN, userLogin);

// company Signup route
router.post(ROUTES.COMPANY_SIGNUP, companySignup);

// company login route
router.post(ROUTES.COMPANY_LOGIN, companyLogin);

module.exports = router;
