const mongoose = require("mongoose");

const jobSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
      maxlength: 50,
    },
    description: {
      type: String,
      required: true,
      maxlength: 3000,
      minlength: 100,
      trim: true,
    },
    salary: {
      type: Number | String,
      default: "Best in the industry",
    },
    category: {
      type: String,
      required: true,
      trim: true,
    },
    // To do
    companyInfo: {
      type: String,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Job", jobSchema);
