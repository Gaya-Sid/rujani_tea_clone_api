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

  let token = req.headers["x-access-token"];

  if (!token) {
    return res.status(403).send({
      message: "No token provided!",
    });
  }

  jwt.verify(token, config.secret, (err, decoded) => {
    if (err) {
      return res.status(401).send({
        message: "Unauthorized!",
      });
    }
    req.userId = decoded.id;
    next();
  });
};

module.exports = { auth };
