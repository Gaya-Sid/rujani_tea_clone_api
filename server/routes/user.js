const express = require("express");
const router = express.Router();

const { check } = require("express-validator");
const { auth } = require("../middlewares/authJwt");

const {
  getUser,
  registerUser,
  updateUserInfo,
  loginUser,
  logoutUser,
} = require("../controllers/user");

router.get("/user/:id", getUser);
router.post(
  "/user/register",
  [
    check("firstName", "Please enter a valid first name")
      .not()
      .isEmpty()
      .isAlpha(),
    check("lastName", "Please enter valid last name").not().isEmpty().isAlpha(),
    check("email", "Please include a valid email").not().isEmpty().isEmail(),
    check("password", "Please enter a password with 6 or more characters")
      .not()
      .isEmpty()
      .isLength({ min: 6 }),
  ],
  registerUser
);

router.put("/user/:id/info", updateUserInfo);
router.post("/user/login", loginUser);
router.get("/logout", auth, logoutUser);

router.get("/auth", auth, (req, res) => {
  res.status(200).json({
    isAuth: true,
    user: "I will add userInfo",
  });
});

module.exports = router;
