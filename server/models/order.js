const Sequelize = require("sequelize");
const connection = require("../config/connection");

const order = connection.define("order", {
  id: {
    type: Sequelize.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  total: {
    type: Sequelize.FLOAT,
    allowNull: false,
  },
  order_date: {
    type: Sequelize.DATE,
    allowNull: false,
  },
});

const order_item = connection.define("order_item", {
  id: {
    type: Sequelize.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  price: {
    type: Sequelize.FLOAT,
    allowNull: false,
  },
  quantity: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
});

const transaction = connection.define("transaction", {
  id: {
    type: Sequelize.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  mode: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  status: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});

transaction.hasOne(order);
order.belongsTo(transaction);

order.hasMany(order_item);
order_item.belongsTo(order);

module.exports = {
  order,
  order_item,
  transaction,
};
