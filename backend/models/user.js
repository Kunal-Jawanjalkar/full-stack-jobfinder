const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema;

// User schema
const userSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      trim: true,
    },
    lastName: {
      type: String,
      trim: true,
    },
    email: {
      type: String,
      required: [true, "email is required"],
      lowercase: true,
      trim: true,
    },
    password: {
      type: String,
      required: [true, "password is required"],
    },
    phoneNumber: {
      type: String,
    },
    qualification: {
      type: String,
      default: "",
    },
    experience: {
      type: Number,
      default: 0,
    },
    appliedJobs: {
      type: [{ type: ObjectId, ref: "Job" }],
      default: [],
    },
    description: {
      type: String,
      default: "",
    },
    desiredCategory: {
      type: ObjectId,
      ref: "Category",
    },
    role: {
      type: String,
      default: "user",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", userSchema);
