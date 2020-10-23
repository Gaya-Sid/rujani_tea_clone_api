const category = require("../models/category");
const {
  product,
  product_metaData,
  media,
  category_has_product,
} = require("../models/product");

// Get all products
exports.getProducts = async (req, res) => {
  const products = await product
    .findAll({
      include: [
        {
          model: media,
        },
      ],
    })
    .then((products) => {
      return products.map((product) => {
        //tidy up the product data
        return Object.assign(
          {},
          {
            product_id: product.id,
            name: product.name,
            price: product.price,
            media: product.media.map((image) => {
              return Object.assign(
                {},
                {
                  url: image.url,
                  resource_id: image.resource_id,
                }
              );
            }),
          }
        );
      });
    })
    .then((data) => {
      console.log(data);
      res.json(data);
    })
    .catch((err) => console.error(err.message));
};

// Get product by id
exports.getProductById = async (req, res) => {
  const p = await product
    .findByPk(req.params.id)
    .then((data) => {
      console.log(data);
      res.json(data);
    })
    .catch((err) => console.error(err.message));
};
