const User = require("../models/user");
const bcrypt = require("bcryptjs");

exports.signin = async (req, res) => {
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(req.body.password, salt);

  const user = new User({ ...req.body, password: hashedPassword });

  user.save((err, user) => {
    if (err) {
      console.log(err);
      return res.status(400).json({ msg: "something went wrong" });
    } else {
      const { firstName, lastName, email, phoneNumber } = user;
      res.status(200).json({ firstName, lastName, email, phoneNumber });
    }
  });
};
