const Job = require("../models/job");
const User = require("../models/user");

// create job controller
// todo: for company only
exports.createJob = async (req, res) => {
  try {
    const job = new Job(req.body);
    const savedJob = await job.save();
    if (savedJob) return res.status(200).json({ msg: "job saved" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: "some error occured" });
  }
};

// controller for getting job based on jobId
// role: for company and user
exports.getJobById = async (req, res) => {
  try {
    const jobId = req.params.jobId;
    const job = await Job.findById(jobId).exec();
    if (job) return res.status(200).json(job);
  } catch (error) {
    console.log(error);
    res.status(400).json({ msg: "some error occured" });
  }
};

// Controller for getting a job based on category and location of job
exports.getJobByCategoryAndLocation = async (req, res) => {
  try {
    const category = req.query.category;
    const location = req.query.location;
    const requestedJobs = await Job.find({ category, location }).exec();
    if (requestedJobs) {
      return res.status(200).json(requestedJobs);
    }
  } catch (error) {
    console.log(error);
    res.status(400).json({ msg: "some error occured" });
  }
};

// controller for applying a job
// todo only for user route
exports.applyForJob = async (req, res) => {
  const { userDetails, userId } = req.body;
  const jobId = req.params.jobId;
  try {
    // find the job by id and push the user details in  applications array
    const jobUpdate = { $push: { applications: [userDetails] } };
    const updatedJob = await Job.findByIdAndUpdate(jobId, jobUpdate).exec();

    // find the user by id and push the jobId in applied jobs array
    const userUpdate = { $push: { appliedJobs: [{ jobId }] } };
    const updatedUser = await User.findByIdAndUpdate(userId, userUpdate).exec();

    // if everything gets updated well
    if (updatedJob && updatedUser)
      return res.status(200).json({ msg: "successfully applied for job" });
  } catch (error) {
    console.log(error);
    res.status(400).json({ msg: "some error occured" });
  }
};