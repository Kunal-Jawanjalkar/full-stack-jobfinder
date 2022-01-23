const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema;

const companySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      trim: true,
    },
    email: {
      type: String,
      lowercase: true,
      trim: true,
    },
    phoneNumber: {
      type: String,
    },
    password: {
      type: String,
    },
    description: {
      type: String,
      default: "",
    },
    location: {
      type: String,
      default: "",
    },
    jobOpenings: {
      type: Array,
      default: [],
    },
    role: {
      type: String,
      default: "company",
    },
    //   TO DO
    category: {
      type: String,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Company", companySchema);
