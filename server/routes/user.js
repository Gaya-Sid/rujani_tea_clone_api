const express = require("express");
const router = express.Router();

const { check } = require("express-validator");

const {
  getUser,
  registerUser,
  updateUserInfo,
  loginUser,
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
    check("email", "Please include a valid email")
      .not()
      .isEmpty()
      .isEmail()
      .normalizeEmail(),
    check("password", "Please enter a password with 6 or more characters")
      .not()
      .isEmpty()
      .isLength({ min: 6 }),
  ],
  registerUser
);

router.put("/user/:id/info", updateUserInfo);
router.post("/user/login", loginUser);

module.exports = router;
