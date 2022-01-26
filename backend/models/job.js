const mongoose = require("mongoose");
const { Schema } = mongoose;

const jobSchema = new Schema(
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
      type: Schema.Types.ObjectId,
      ref: "Company",
    },
    companyId: {
      type: String,
      default: "",
    },
    companyName: {
      type: String,
      default: "",
    },
    applications: {
      type: [{ type: Schema.Types.ObjectId, ref: "User" }],
      default: [],
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Job", jobSchema);
