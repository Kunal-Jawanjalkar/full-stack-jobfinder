const ROLES = {
  COMPANY: { role: "company" },
  USER: { role: "user" },
};

// roles will be an array of roles
const verifyRole = (roles) => {
  return (req, res, next) => {
    const userRole = req.body.role;

    // if the roles array inclues the role give access to particular path
    if (roles.inclues(userRole)) {
      return next();
    } else {
      res.status(401).json({ msg: "unauthorized access" });
    }
  };
};

module.exports = verifyRole;
