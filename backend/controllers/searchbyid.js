const { request } = require("express");
const Company = require("../models/company");
const Job = require("../models/job");
const User = require("../models/user");

// get user by id
exports.getUserById = async (req, res) => {
  const userId = req.params.userId;
  try {
    const user = await User.findById(userId).populate("appliedJobs").exec();
    const {
      _id,
      firstName,
      lastName,
      email,
      quailification,
      experience,
      description,
      role,
      createdAt,
      updatedAt,
      appliedJobs,
    } = user;
    if (user)
      return res.status(200).json({
        _id,
        firstName,
        lastName,
        email,
        quailification,
        experience,
        description,
        role,
        createdAt,
        updatedAt,
        appliedJobs,
      });
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

// get company by id
exports.getCompanyById = async (req, res) => {
  const companyId = req.params.companyId;
  try {
    const company = await Company.findById(companyId).exec();
    const {
      _id,
      name,
      email,
      phoneNumber,
      description,
      location,
      jobOpenings,
      role,
      category,
      createdAt,
      updatedAt,
    } = company;
    if (company)
      return res.status(200).json({
        _id,
        name,
        email,
        phoneNumber,
        description,
        location,
        jobOpenings,
        role,
        category,
        createdAt,
        updatedAt,
      });
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

exports.getJobsByCompanyId = async (req, res) => {
  try {
    const companyId = req.params.companyId;
    const jobs = await Job.find({ companyId })
      .populate({
        path: "companyDetails",
        select: [
          "name",
          "category",
          "email",
          "phoneNumber",
          "location",
          "jobOpenings",
        ],
      })
      .exec();
    res.status(200).json(jobs);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};
