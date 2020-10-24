const { category } = require("../models/category");
const { user, address, state, city } = require("../models/user");

// post : create user
exports.createUser = async (req, res) => {
  try {
    const newUser = await user
      .create(
        {
          first_name: req.body.firstName,
          last_name: req.body.lastName,
          email: req.body.email,
          password: req.body.password,
          phone: req.body.phone,
          address: [
            {
              addr1: "",
              addr2: "",
              city: [
                {
                  city_name: "",
                  zip_code: 0,
                },
              ],
              state: [
                {
                  state: "",
                },
              ],
            },
          ],
        },
        {
          include: [
            {
              model: address,
              include: [
                {
                  model: city,
                },
                {
                  model: state,
                },
              ],
            },
          ],
        }
      )
      .then((data) => {
        console.log(data);
        res.json(data);
      })
      .catch((err) => console.error(err.message));
  } catch {
    res.json("Failed to register user!");
  }
};

// Update address :
exports.updateUserInfo = async (req, res) => {
  console.log(req.body);
  try {
    let status = {
      updatedAddress: false,
      updatedCity: false,
      updatedState: false,
    };
    address
      .update(
        {
          addr1: req.body.addr1,
          addr2: req.body.addr2,
        },
        {
          where: {
            id: parseInt(req.params.id),
          },
        }
      )
      .then((data) => {
        status.updatedAddress = true;
        city
          .update(
            {
              city_name: req.body.city,
              zip_code: parseInt(req.body.zip),
            },
            {
              where: {
                id: parseInt(req.params.id),
              },
            }
          )
          .catch((err) => console.error(err.message));
        state
          .update(
            {
              state: req.body.state,
            },
            {
              where: {
                id: parseInt(req.params.id),
              },
            }
          )
          .catch((err) => console.error(err.message));
      })
      .then((data) => {
        status.updatedCity = true;
        status.updatedState = true;
        res.json(status);
      })
      .catch((err) => console.error(err.message));
  } catch {
    res.json("Failed to update user address!");
  }
};

// Get user
exports.getUser = async (req, res) => {
  const allCategories = await user
    .findAll({
      where: {
        id: req.params.id,
      },
      include: [
        {
          model: address,
          include: [
            {
              model: state,
            },
            {
              model: city,
            },
          ],
        },
      ],
    })
    .then((user) => {
      let userData = {
        id: user[0].id,
        firstName: user[0].first_name,
        lastName: user[0].last_name,
        email: user[0].email,
        phone: user[0].phone,
        address: {
          addr1: user[0].address.addr1,
          addr2: user[0].address.addr2,
          city: user[0].address.city.city_name,
          zip: user[0].address.city.zip_code,
        },
      };
      res.json(userData);
    })
    .catch((err) => console.error(err.message));
};
