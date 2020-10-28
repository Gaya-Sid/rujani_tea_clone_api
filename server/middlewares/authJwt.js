const jwt = require("jsonwebtoken");
const config = require("../config/auth.config.js");

const auth = (req, res, next) => {
  let token = req.cookies.rt_auth;

  console.log(req.cookies.rt_auth);

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

// const authJwt = {
//   verifyToken: verifyToken,
// };

module.exports = { auth };
