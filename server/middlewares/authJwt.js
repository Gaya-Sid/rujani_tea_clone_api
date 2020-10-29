const jwt = require("jsonwebtoken");
const config = require("../config/auth.config.js");

const auth = (req, res, next) => {
  // const bearerHeader = req.headers["authorization"];
  // if (typeof bearerHeader !== "undefined") {
  //   const bearer = bearerHeader.split(" ");
  //   const bearerToken = bearer[1];
  //   next();
  // } else {
  //   // forbidden
  //   res.json({ message: "Unauthorized!" });
  // }

  let token = req.headers["rt_token"];

  if (!token) {
    return res.status(403).json({
      message: "No token provided!",
      isAuth: false,
    });
  }

  jwt.verify(token, config.secret, (err, decoded) => {
    if (err) {
      return res.status(401).json({
        message: "Unauthorized!",
        isAuth: false,
      });
    }
    req.id = decoded.id;
    next();
  });
};

module.exports = { auth };
