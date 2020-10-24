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
                  resource_id: product.id,
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
    .findAll({
      where: {
        id: req.params.id,
      },
      include: [
        {
          model: media,
        },
      ],
    })
    .then((p) => {
      let productData = {
        id: p[0].id,
        name: p[0].name,
        price: p[0].price,
        desc: p[0].desc,
        manufactured_date: p[0].manufactured_date,
        stock: p[0].stock,
        url1: p[0].media[0].url,
        url2: p[0].media[1].url,
      };
      res.json(productData);
    })
    .catch((err) => console.error(err.message));
};
