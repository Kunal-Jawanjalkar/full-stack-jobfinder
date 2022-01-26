const mongoose = require("mongoose");
const { Schema } = mongoose;

const companySchema = new Schema(
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
    jobOpenings: [{ type: Schema.Types.ObjectId, ref: "Job" }],
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
