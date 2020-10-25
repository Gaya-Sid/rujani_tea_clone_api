const { category } = require("../models/category");
const {
  product,
  product_metaData,
  media,
  category_has_product,
} = require("../models/product");

// Get all categories
exports.getCategories = async (req, res) => {
  try {
    const allCategories = await category
      .findAll({})
      .then((data) => {
        console.log(data);
        res.json(data);
      })
      .catch((err) => console.error(err.message));
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
};

// Get all products
exports.getProductsByCategory = async (req, res) => {
  try {
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
                attributes: ["resource_id", "url"],
              },
            ],
            attributes: ["id", "name", "price"],
          },
          {
            model: category,
            attributes: ["name"],
          },
        ],
      })
      .then((data) => {
        let products = data.map((item) => {
          return {
            id: item.product.id,
            name: item.product.name,
            price: item.product.price,
            url1: item.product.media[0].url,
            url2: item.product.media[1].url,
          };
        });
        res.json({
          categoryId: data[0].categoryId,
          categoryName: data[0].category.name,
          products,
        });
      })
      .catch((err) => console.error(err.message));
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
};
