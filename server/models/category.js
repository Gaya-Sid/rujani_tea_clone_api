const Sequelize = require("sequelize");
const connection = require("../config/connection");
const {
  product,
  product_metaData,
  media,
  category_has_product,
} = require("./product");

const category = connection.define(
  "category",
  {
    id: {
      type: Sequelize.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: Sequelize.STRING,
    },
  },
  {
    timestamps: false,
  }
);

module.exports = {
  category,
};
