const Sequelize = require("sequelize");
const connection = require("../config/connection");

const { user, address, state, city } = require("./user");
const { category } = require("./category");
const { order, order_item, transaction } = require("./order");

const product = connection.define(
  "product",
  {
    id: {
      type: Sequelize.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    price: {
      type: Sequelize.FLOAT,
      allowNull: false,
    },
    desc: {
      type: Sequelize.TEXT,
    },
    manufactured_date: {
      type: Sequelize.STRING,
    },
    stock: {
      type: Sequelize.INTEGER,
    },
  },
  {
    timestamps: false,
  }
);

const product_metaData = connection.define(
  "product_metaData",
  {
    id: {
      type: Sequelize.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    key: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    value: {
      type: Sequelize.FLOAT,
      allowNull: false,
    },
  },
  {
    timestamps: false,
  }
);

const media = connection.define(
  "media",
  {
    id: {
      type: Sequelize.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    url: {
      type: Sequelize.TEXT,
      allowNull: false,
    },
    resource_id: {
      type: Sequelize.STRING,
    },
  },
  {
    timestamps: false,
  }
);

product.hasMany(product_metaData);
product_metaData.belongsTo(product);

product.hasMany(media);
media.belongsTo(product);

product.belongsToMany(category, { through: "category_has_product" });
category.belongsToMany(product, { through: "category_has_product" });

product.hasMany(order_item);
order_item.belongsTo(product);

category.hasOne(media);
media.belongsTo(category);

module.exports = {
  product,
  product_metaData,
  media,
};
