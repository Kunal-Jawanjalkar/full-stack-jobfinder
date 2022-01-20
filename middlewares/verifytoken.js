const jwt = require("jsonwebtoken");

// function to verify token
const verifyToken = async (req, res, next) => {
  try {
    //   check if token present in request header
    const authHeader = req.headers["authorization"];
    const token = authHeader && authHeader.split(" ")[1];

    // if no token is present
    if (!token) return res.status(401).json({ msg: "no token" });

    // decode token
    const decodeToken = await jwt.verifyToken(token, process.env.TOKEN_SECRET);

    // if false token
    if (!decodeToken) {
      return res.status(400).json({ msg: "invalid token" });
    } else {
      next(); // switch to next middleware if correct token
    }
  } catch (error) {
    res.status(500).json({ msg: "some error occured" });
  }
};

module.exports = verifyToken;
