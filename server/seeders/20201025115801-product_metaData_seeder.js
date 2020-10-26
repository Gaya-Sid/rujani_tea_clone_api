"use strict";

const product = require("../models/product");

const data = [
  {
    key: "taste",
    value: "Refreshing/Smooth/Citrusy",
    productId: 1,
  },
  {
    key: "recommended_time",
    value: "Morning & afternoon",
    productId: 1,
  },
  {
    key: "taste",
    value: "Sparkling/Robust",
    productId: 2,
  },
  {
    key: "recommended_time",
    value: "Morning",
    productId: 2,
  },
  {
    key: "taste",
    value: "Refreshing/Energising/Mellow/Light/Breezy",
    productId: 3,
  },
  {
    key: "recommended_time",
    value: "All-day",
    productId: 3,
  },
  {
    key: "taste",
    value: "Refreshing/Energising/Rich/Full-bodied/Robust",
    productId: 4,
  },
  {
    key: "recommended_time",
    value: "All-day",
    productId: 4,
  },
  {
    key: "taste",
    value: "Refreshing/Smooth/Citrusy",
    productId: 5,
  },
  {
    key: "recommended_time",
    value: "Morning & afternoon",
    productId: 5,
  },
  {
    key: "taste",
    value: "Sparkling/Robust",
    productId: 6,
  },
  {
    key: "recommended_time",
    value: "Morning",
    productId: 6,
  },
  {
    key: "taste",
    value: "Refreshing/Energising/Mellow/Light/Breezy",
    productId: 7,
  },
  {
    key: "recommended_time",
    value: "All-day",
    productId: 7,
  },
  {
    key: "taste",
    value: "Refreshing/Energising/Rich/Full-bodied/Robust",
    productId: 8,
  },
  {
    key: "recommended_time",
    value: "All-day",
    productId: 8,
  },
  {
    key: "taste",
    value: "Refreshing/Smooth/Citrusy",
    productId: 9,
  },
  {
    key: "recommended_time",
    value: "Morning & afternoon",
    productId: 9,
  },
  {
    key: "taste",
    value: "Sparkling/Robust",
    productId: 10,
  },
  {
    key: "recommended_time",
    value: "Morning",
    productId: 10,
  },
  {
    key: "taste",
    value: "Refreshing/Energising/Mellow/Light/Breezy",
    productId: 11,
  },
  {
    key: "recommended_time",
    value: "All-day",
    productId: 11,
  },
  {
    key: "taste",
    value: "Refreshing/Energising/Rich/Full-bodied/Robust",
    productId: 12,
  },
  {
    key: "recommended_time",
    value: "All-day",
    productId: 12,
  },
  {
    key: "taste",
    value: "Refreshing/Smooth/Citrusy",
    productId: 13,
  },
  {
    key: "recommended_time",
    value: "Morning & afternoon",
    productId: 13,
  },
  {
    key: "taste",
    value: "Sparkling/Robust",
    productId: 14,
  },
  {
    key: "recommended_time",
    value: "Morning",
    productId: 14,
  },
  {
    key: "taste",
    value: "Refreshing/Energising/Mellow/Light/Breezy",
    productId: 15,
  },
  {
    key: "recommended_time",
    value: "All-day",
    productId: 15,
  },
  {
    key: "taste",
    value: "Refreshing/Energising/Rich/Full-bodied/Robust",
    productId: 16,
  },
  {
    key: "recommended_time",
    value: "All-day",
    productId: 16,
  },
];

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert("product_metaData", data, {
      fields: ["key", "value", "productId"],
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("product_metaData", null, {});
  },
};
