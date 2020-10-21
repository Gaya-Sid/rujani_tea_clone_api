const Sequelize = require("sequelize");
const config = require("./config");

const sequelize = new Sequelize(
  config.development.database,
  config.development.username,
  config.development.password,
  {
    host: config.development.host,
    dialect: "mysql",
    operatorAliases: false,
  }
);

sequelize
  .authenticate()
  .then(() => {
    console.log("Connection to Database successful!");
  })
  .catch((err) => {
    console.error("Unable to connect to Database: ", err);
  });

sequelize
  .sync({
    logging: console.log,
  })
  .then(() => {
    console.log("Connection to Database successful!");
  })
  .catch((err) => {
    console.error("Unable to connect to Database: ", err);
  });

module.exports = sequelize;
