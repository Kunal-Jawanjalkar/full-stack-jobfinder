const Company = require("../models/company");
const Job = require("../models/job");
const User = require("../models/user");
const { validateCreateJob } = require("./validations/index");

// create job controller
// todo: for company only
exports.createJob = (req, res) => {
  // console.log(req.body);

  // validation
  const data = req.body;
  const error = validateCreateJob(data);
  if (error) return res.status(400).json(error);

  // save the job in jobs collectin
  const job = new Job(req.body).save((err, job) => {
    if (err) return res.status(400).json({ msg: err.message });
    res.status(200).json(job);
  });

  // populate the job by companyDetails
  Job.find({ companyId: req.body.companyId })
    .populate("companyDetails")
    .exec((err, job) => {
      if (err) return res.status(400).json({ msg: err.message });
      res.status(200).json(job);
    });
};

// controller for getting job based on jobId
// role: for company and user
exports.getJobById = async (req, res) => {
  try {
    const jobId = req.params.jobId;
    const job = await Job.findById({ _id: jobId })
      .populate({
        path: "applications",
        select: [
          "firstName",
          "lastName",
          "email",
          "phoneNumber",
          "experience",
          "qualification",
          "description",
        ],
      })
      .exec();
    if (job) return res.status(200).json(job);
  } catch (error) {
    console.log(error);
    res.status(400).json({ msg: error.message });
  }
};

// Controller for getting a job based on category and location of job
exports.getJobByCategoryAndLocation = async (req, res) => {
  try {
    const jobQuery = req.query.jobQuery;
    // match the jobs either by category or companyname
    const requestedJobs = await Job.find({
      $or: [
        { category: { $regex: jobQuery } },
        { companyName: { $regex: jobQuery } },
      ],
    })
      .populate({
        path: "companyDetails",
        select: [
          "name",
          "category",
          "email",
          "phoneNumber",
          "location",
          "jobOpenings",
        ],
      })
      .exec();
    if (requestedJobs) {
      return res.status(200).json(requestedJobs);
    }
  } catch (error) {
    console.log(error);
    res.status(400).json({ msg: error.message });
  }
};

// controller for applying a job
// todo only for user route
exports.applyForJob = async (req, res) => {
  const { userDetails, userId } = req.body;
  if (!userDetails && !userId)
    return res.status(400).json({ msg: "userDetails & userId is required" });
  const jobId = req.params.jobId;
  try {
    // find the job by id and push the user details in  applications array
    const jobUpdate = { $push: { applications: [userDetails] } };
    const updatedJob = await Job.findByIdAndUpdate(jobId, jobUpdate).exec();

    // find the user by id and push the jobId in applied jobs array
    const userUpdate = { $push: { appliedJobs: [jobId] } };
    const updatedUser = await User.findByIdAndUpdate(userId, userUpdate).exec();

    // if everything gets updated well
    if (updatedJob && updatedUser)
      return res.status(200).json({ msg: "successfully applied for job" });
  } catch (error) {
    console.log(error);
    res.status(400).json({ msg: error.message });
  }
};
