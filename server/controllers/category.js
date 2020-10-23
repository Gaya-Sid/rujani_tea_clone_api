const { category } = require("../models/category");
const {
  product,
  product_metaData,
  media,
  category_has_product,
} = require("../models/product");

// Get all categories
exports.getCategories = async (req, res) => {
  const allCategories = await category
    .findAll({})
    .then((data) => {
      console.log(data);
      res.json(data);
    })
    .catch((err) => console.error(err.message));
};

// Get all products
exports.getProductsByCategory = async (req, res) => {
  const products = await category_has_product
    .findAll({
      where: {
        categoryId: req.params.id,
      },
      include: [
        {
          model: product,
          include: [
            {
              model: media,
            },
          ],
        },
      ],
    })
    .then((data) => {
      console.log(data);
      res.json(data);
    })
    .catch((err) => console.error(err.message));
};
