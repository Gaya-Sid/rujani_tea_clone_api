const express = require("express");
const { getUser, createUser, updateUserInfo } = require("../controllers/user");

const router = express.Router();

router.get("/user/:id", getUser);
router.post("/user", createUser);
router.put("/user/:id/info", updateUserInfo);

module.exports = router;
