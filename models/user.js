const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true,
      maxlength: 20,
      trim: true,
    },
    lastName: {
      type: String,
      required: true,
      maxlength: 20,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      trim: true,
      unique: true,
    },
    phoneNumber: {
      type: String,
      required: true,
      unique: true,
      maxlength: 10,
    },
    password: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", userSchema);
