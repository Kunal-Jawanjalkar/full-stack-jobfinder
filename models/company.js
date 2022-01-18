const mongoose = require("mongoose");

const companySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      maxlength: 50,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    phoneNumber: {
      type: String,
      required: true,
      unique: true,
      maxlength: 10,
    },
    description: {
      type: String,
      max: [2000, "description should not be more than 2000 characters"],
      min: [2000, "description should not be less than 100 characters"],
    },
    //   TO DO
    cateogory: {
      type: String,
    },
    encryPassword: {
      type: String,
    },
    location: {
      type: String,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Company", companySchema);
