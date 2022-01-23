const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema;

const jobapplicationSchema = new mongoose.Schema(
  {
    jobDetails: {
      type: ObjectId,
      ref: "Job",
    },
    applicantDetails: {
      type: ObjectId,
      ref: "User",
    },
    userId: {
      type: String,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("JobApplication", jobapplicationSchema);
