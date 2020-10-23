"use strict";

const data = [
  { name: "AWARD WINNERS" },
  { name: "SIGNATURE TEAS" },
  { name: "ASSAM BLACK TEAS" },
  { name: "INFUSIONS & BLENDS" },
  { name: "WHITE TEAS" },
  { name: "GREEN TEAS" },
];

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert("categories", data, {
      fields: ["name"],
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("categories", null, {});
  },
};
