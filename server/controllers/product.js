const { product, product_metaData, media } = require("../models/product");

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
exports.getProducts = async (req, res) => {
  // const products = await product
  //   .findAll({
  //     include: [
  //       {
  //         model: media,
  //       },
  //     ],
  //   })
  //   .then((products) => {
  //     return products.map((product) => {
  //       //tidy up the product data
  //       return Object.assign(
  //         {},
  //         {
  //           product_id: product.id,
  //           name: product.name,
  //           price: product.price,
  //           media: product.media.map((image) => {
  //             return Object.assign(
  //               {},
  //               {
  //                 url: image.url,
  //                 resource_id: image.resource_id,
  //               }
  //             );
  //           }),
  //         }
  //       );
  //     });
  //   })
  //   .then((data) => {
  //     console.log(data);
  //     res.json(data);
  //   })
  //   .catch((err) => console.error(err.message));
};

// Create and Save a new Product
exports.create = (req, res) => {};

// Retrieve all Tutorials from the database.
exports.findAll = (req, res) => {};

// Find a single Tutorial with an id
exports.findOne = (req, res) => {};

// Update a Tutorial by the id in the request
exports.update = (req, res) => {};

// Delete a Tutorial with the specified id in the request
exports.delete = (req, res) => {};

// Delete all Tutorials from the database.
exports.deleteAll = (req, res) => {};

// Find all published Tutorials
exports.findAllPublished = (req, res) => {};
