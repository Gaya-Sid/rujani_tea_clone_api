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
const categoryRoutes = require("./routes/category");
const userRoutes = require("./routes/user");
const cookieParser = require("cookie-parser");

// middleware
app.use(morgan("dev"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(cors());
app.use("/api", productRoutes);
app.use("/api", categoryRoutes);
app.use("/api", userRoutes);

app.get("/", (req, res) => {
  res.json({
    getAllProducts: "/api/products",
    getProductById: "/api/product/:id",
    getCategories: "/api/categories",
    getProductsInCategory: "/api/category/:id",
  });
});

const port = process.env.PORT || 3002;
app.listen(port, () => {
  console.log(`Server running at ${port}`);
});
