"use strict";

const data = [
  { productId: 16, categoryId: 1 },
  { productId: 4, categoryId: 1 },
  { productId: 2, categoryId: 1 },
  { productId: 15, categoryId: 2 },
  { productId: 4, categoryId: 2 },
  { productId: 9, categoryId: 2 },
  { productId: 5, categoryId: 2 },
  { productId: 3, categoryId: 2 },
  { productId: 16, categoryId: 3 },
  { productId: 6, categoryId: 3 },
  { productId: 8, categoryId: 3 },
  { productId: 12, categoryId: 3 },
  { productId: 15, categoryId: 3 },
  { productId: 10, categoryId: 3 },
  { productId: 1, categoryId: 4 },
  { productId: 11, categoryId: 4 },
  { productId: 13, categoryId: 5 },
  { productId: 14, categoryId: 5 },
  { productId: 7, categoryId: 6 },
  { productId: 2, categoryId: 6 },
  { productId: 3, categoryId: 6 },
];

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert("category_has_products", data, {
      fields: ["productId", "categoryId"],
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("category_has_products", null, {});
  },
};
