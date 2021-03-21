const jwt = require("jsonwebtoken");
require("dotenv").config();

function jwtGenerator(user_id) {
  const payLoad = {
    user: user_id,
  };

  return jwt.sign(payLoad, process.env.jwtSecret, { expiresIn: "1hr" });
}

module.exports = jwtGenerator;
