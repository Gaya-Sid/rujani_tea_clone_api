const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const morgan = require("morgan");
const cors = require("cors");

require("dotenv").config();

// db setup
const sequelize = require("./config/connection");

const { product, product_metaData, media } = require("./models/product");
const { user, address, state, city } = require("./models/user");
const { category } = require("./models/category");
const { order, order_item, transaction } = require("./models/order");

// routes
const productRoutes = require("./routes/product");

// middleware
app.use(morgan("dev"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());
app.use("/api", productRoutes);

app.get("/", (req, res) => {
  res.json({ getAllProducts: "/api/products" });
});

const port = process.env.PORT || 3002;
app.listen(port, () => {
  console.log(`Server running at ${port}`);
});
