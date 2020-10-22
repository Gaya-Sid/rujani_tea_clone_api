const express = require("express");
const { getProducts } = require("../controllers/product");

const router = express.Router();
console.log("reached router");
router.get("/products", getProducts);

module.exports = router;
