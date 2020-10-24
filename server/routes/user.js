const express = require("express");
const { createUser } = require("../controllers/user");

const router = express.Router();

router.post("/user", createUser);
// router.get("/product/:id", getProductById);

module.exports = router;
