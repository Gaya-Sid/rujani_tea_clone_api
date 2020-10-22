"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("media", {
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
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("media");
  },
};
