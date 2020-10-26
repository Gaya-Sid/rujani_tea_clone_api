const Sequelize = require("sequelize");
const connection = require("../config/connection");

const { product, product_metaData, media } = require("./product");
const { category } = require("./category");
const { order, order_item, transaction } = require("./order");

const user = connection.define(
  "user",
  {
    id: {
      type: Sequelize.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    first_name: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    last_name: {
      type: Sequelize.STRING,
    },
    email: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    password: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    phone: {
      type: Sequelize.INTEGER,
    },
    token: {
      type: Sequelize.STRING,
    },
  },
  {
    timestamps: false,
  }
);

const address = connection.define(
  "address",
  {
    id: {
      type: Sequelize.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    addr1: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    addr2: {
      type: Sequelize.STRING,
    },
  },
  {
    timestamps: false,
  }
);

const state = connection.define(
  "state",
  {
    id: {
      type: Sequelize.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    state: {
      type: Sequelize.STRING,
      allowNull: false,
    },
  },
  {
    timestamps: false,
  }
);

const city = connection.define(
  "city",
  {
    id: {
      type: Sequelize.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    city_name: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    zip_code: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
  },
  {
    timestamps: false,
  }
);

user.hasMany(order);
order.belongsTo(user);

address.hasOne(user);
user.belongsTo(address);

user.hasMany(transaction);
transaction.belongsTo(user);

state.hasMany(address);
address.belongsTo(state);

city.hasMany(address);
address.belongsTo(city);

module.exports = {
  user,
  address,
  state,
  city,
};
