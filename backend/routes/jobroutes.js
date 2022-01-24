const express = require("express");
const router = express.Router();
const ROUTES = require("./allroutes");
const {
  createJob,
  getJobById,
  getJobByCategoryAndLocation,
  applyForJob,
} = require("../controllers/jobroutes");
const verifyRole = require("../middlewares/verifyrole");
const verifyToken = require("../middlewares/verifytoken");

// router level middlewares
// router.use(verifyToken);
// router.use(verifyRole(["user", "company"]));

// function to create job
router.post(ROUTES.CREATE_JOB, createJob);

// function to get job by id
router.get(ROUTES.GET_JOB_BY_ID, getJobById);

// get jobs by category and job location
router.get(
  ROUTES.GET_JOB_BY_CATEGORY_AND_LOCATION,
  getJobByCategoryAndLocation
);

// apply for job
// adds user in the application field of Jobs
// collection and adds jobId in the applied jobs field of users collection
router.put(ROUTES.APPLY_FOR_JOB, applyForJob);
module.exports = router;
