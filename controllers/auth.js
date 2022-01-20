const User = require("../models/user");
const Company = require("../models/company");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const {
  validateCompanySignup,
  validateUserSignup,
} = require("./validations/index");

// user Signup controller
exports.userSignup = async (req, res) => {
  // validation
  const data = req.body;
  const error = validateUserSignup(data);
  if (error) return res.status(400).json(error);

  // save details
  try {
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.password, salt);

    const user = new User({ ...req.body, password: hashedPassword });

    const savedUser = await user.save();
    const {
      firstName,
      lastName,
      email,
      phoneNumber,
      qualification,
      experience,
    } = user;
    res.status(200).json({
      firstName,
      lastName,
      email,
      phoneNumber,
      qualification,
      experience,
    });
  } catch (error) {
    console.log(error);
    res.status(400).json({ msg: error.message });
  }
};

// company signup controller
exports.companySignup = async (req, res) => {
  // validation
  const data = req.body;
  const error = validateCompanySignup(data);
  if (error) return res.status(400).json(error);

  // save details
  try {
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.password, salt);

    const company = new Company({ ...req.body, password: hashedPassword });
    const savedCompany = await company.save();

    res.status(200).json({
      name: company.name,
      email: company.email,
      phoneNumber: company.phoneNumber,
      description: company.description,
      category: company.category,
      location: company.location,
    });
  } catch (error) {
    console.log(error);
    res.status(400).json({ msg: error.message });
  }
};

// USER LOGIN CONTROLLER
exports.userLogin = async (req, res) => {
  try {
    // find the user with email in the database
    const user = await User.findOne({ email: req.body.email }).exec();

    // if user exists compare the password else send user not found
    if (user) {
      const password = await bcrypt.compare(req.body.password, user.password);

      // if password matches assign the jwtToken else invalid credentials
      if (password) {
        const token = await jwt.sign(
          { email: user.email, id: user._id },
          process.env.TOKEN_SECRET,
          { expiresIn: "100d" }
        );
        res.status(200).json({
          jwt: { token },
          _id: user._id,
          email: user.email,
          firstName: user.firstName,
          lastName: user.lastName,
        });
      } else {
        res.status(400).json({ msg: "invalid credentials" });
      }
    } else {
      res.status(400).json({ msg: "user not found" });
    }
  } catch (error) {
    res.status(500).json({ msg: "some error occured" });
  }
};

// COMPANY LOGIN CONTROLLER
exports.companyLogin = async (req, res) => {
  try {
    // find the company with email in the database
    const company = await Company.findOne({ email: req.body.email }).exec();

    // if company exists compare the password else send company not found
    if (company) {
      const password = await bcrypt.compare(
        req.body.password,
        company.password
      );

      // if password matches assign the jwtToken else invalid credentials
      if (password) {
        const token = await jwt.sign(
          { email: company.email, id: company._id },
          process.env.TOKEN_SECRET,
          { expiresIn: "100d" }
        );
        res.status(200).json({
          jwt: { token },
          _id: company._id,
          email: company.email,
          name: company.firstName,
        });
      } else {
        res.status(400).json({ msg: "invalid credentials" });
      }
    } else {
      res.status(400).json({ msg: "company not found" });
    }
  } catch (error) {
    res.status(500).json({ msg: "some error occured" });
  }
};
