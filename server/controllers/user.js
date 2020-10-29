const { category } = require("../models/category");
const { user, address, state, city } = require("../models/user");
const { validationResult } = require("express-validator");

const config = require("../config/auth.config");

var jwt = require("jsonwebtoken");
var bcrypt = require("bcrypt");

exports.registerUser = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(422).json({ errors: errors.array() });
  }

  try {
    const newUser = await user
      .create(
        {
          first_name: req.body.firstName,
          last_name: req.body.lastName,
          email: req.body.email,
          password: bcrypt.hashSync(req.body.password, 8),
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
        res.json({ success: true });
      })
      .catch((err) => console.error(err.message));
  } catch {
    res.json("Failed to register user!");
  }
};

exports.loginUser = async (req, res) => {
  console.log(req.cookies, req.body);
  try {
    user
      .findOne({
        where: {
          email: req.body.email,
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
        if (!user) {
          return res.status(404).send({ message: "User Not found." });
        }

        var passwordIsValid = bcrypt.compareSync(
          req.body.password,
          user.password
        );

        if (!passwordIsValid) {
          return res.status(401).send({
            accessToken: null,
            message: "Invalid Password!",
          });
        }

        let userData = {
          id: user.id,
          firstName: user.first_name,
          lastName: user.last_name,
          email: user.email,
          phone: user.phone,
          address: {
            addr1: user.address.addr1,
            addr2: user.address.addr2,
            state: user.address.state.state,
            city: user.address.city.city_name,
            zip: user.address.city.zip_code,
          },
        };

        var token = jwt.sign({ id: user.id }, config.secret, {
          expiresIn: 86400, // 24 hours
        });

        // res.cookie("rt_auth", token, { maxAge: 86400000 }).status(200).json({
        //   loginSuccess: true,
        //   user: userData,
        // });

        res.status(200).json({
          user: userData,
          accessToken: token,
          loginSuccess: true,
        });

        // res.status(200).send({
        //   id: user.id,
        //   email: user.email,
        //   accessToken: token,
        // });
      })
      .catch((err) => {
        res.status(500).send({ message: err.message, msg: "hello kirtesh" });
      });
  } catch (err) {
    res.json("login failed...");
  }
};

// Update address :
exports.updateUserInfo = async (req, res) => {
  try {
    address
      .update(
        {
          addr1: req.body.addr1,
          addr2: req.body.addr2,
        },
        {
          where: {
            id: parseInt(req.body.id),
          },
        }
      )
      .then((data) => {
        city
          .update(
            {
              city_name: req.body.city,
              zip_code: parseInt(req.body.zip),
            },
            {
              where: {
                id: parseInt(req.body.id),
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
        res.json(req.body);
      })
      .catch((err) => console.error(err.message));
  } catch {
    res.json("Failed to update user address!");
  }
};

// Get user
exports.getUser = async (req, res) => {
  try {
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
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
};

exports.logoutUser = async () => {
  res.json("hit it");
};
