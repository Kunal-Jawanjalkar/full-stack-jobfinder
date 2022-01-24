// VALIDATION FUNCTIONS FOR ALL ROUTES
const Joi = require("joi");

// company signup validation
exports.validateCompanySignup = (data) => {
  const companyValidationSchema = Joi.object({
    name: Joi.string().required(),
    email: Joi.string().email().required(),
    phoneNumber: Joi.string().min(10).required(),
    password: Joi.string().min(6).required(),
    category: Joi.string().required(),
    location: Joi.string().required(),
  });

  const validate = companyValidationSchema.validate(data);

  if (validate.error) {
    return validate.error.details;
  } else {
    return false;
  }
};

// user signup validation
exports.validateUserSignup = (data) => {
  const userValidationSchema = Joi.object({
    firstName: Joi.string().required(),
    lastName: Joi.string().required(),
    email: Joi.string().email().required(),
    phoneNumber: Joi.string().min(10).required(),
    password: Joi.string().min(6).required(),
    qualification: Joi.string().required(),
    experience: Joi.number().required(),
  });

  const validate = userValidationSchema.validate(data);

  if (validate.error) {
    return validate.error.details;
  } else {
    return false;
  }
};

// create job validation
exports.validateCreateJob = (data) => {
  const jobValidationSchema = Joi.object({
    title: Joi.string().required(),
    description: Joi.string().required(),
    salary: Joi.number().required(),
    category: Joi.string().required(),
    companyDetails: Joi.object().required(),
    companyId: Joi.string().required(),
  });

  const validate = jobValidationSchema.validate(data);

  if (validate.error) {
    return validate.error.details;
  } else {
    return false;
  }
};
