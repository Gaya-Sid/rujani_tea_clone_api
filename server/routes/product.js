const express = require("express");
const { getProducts, getProductById } = require("../controllers/product");

const router = express.Router();
console.log("reached router");

router.get("/products", getProducts);
router.get("/product/:id", getProductById);

module.exports = router;
