const express = require("express");
const bodyParser = require("body-parser");
const morgan = require("morgan");

const app = express();
require("dotenv").config();

// db setup
const sequelize = require("./config/connection");

const { product, product_metaData, media } = require("./models/product");
const { user, address, state, city } = require("./models/user");
const { category } = require("./models/category");
const { order, order_item, transaction } = require("./models/order");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(morgan("dev"));

const port = process.env.PORT || 3002;

app.get("/", (req, res) => {
  res.send("Home");
});

app.listen(port, () => {
  console.log(`Server running at ${port}`);
});
