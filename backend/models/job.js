const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema;

const jobSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      trim: true,
    },
    description: {
      type: String,
      default: "",
    },
    salary: {
      type: Number,
      default: 0,
    },
    category: {
      type: String,
      trim: true,
    },
    companyDetails: {
      type: ObjectId,
      ref: "Company",
    },
    companyId: {
      type: String,
      default: "",
    },
    applications: {
      type: Array,
      default: [],
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Job", jobSchema);
