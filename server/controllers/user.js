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
              addr1: "no address",
              addr2: "no addr2",
            },
          ],
        },
        {
          include: [address],
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

// post add address :
exports.addUserInfo = async (req, res) => {
  // address.create(
  //   {
  //     address: [{ name: "Alpha" }, { name: "Beta" }],
  //   },
  //   {
  //     include: [Tag],
  //   }
  // );
  // user
  //   .findOne({ where: { id: req.params.id } })
  //   .then((record) => {
  //     if (!record) {
  //       throw new Error("No user found!");
  //     }
  //     console.log(`retrieved record ${JSON.stringify(record, null, 2)}`);
  //     let address = {
  //       addr1: "204, snn raj apartment, ranka colony road",
  //       addr2: "bilekahlli",
  //     };
  //     record.update(values).then((updatedRecord) => {
  //       console.log(`updated record ${JSON.stringify(updatedRecord, null, 2)}`);
  //       // login into your DB and confirm update
  //     });
  //   })
  //   .catch((error) => {
  //     // do seomthing with the error
  //     throw new Error(error);
  //   });
  // try {
  //   const newUser = await user
  //     .create({
  //       first_name: req.body.firstName,
  //       last_name: req.body.lastName,
  //       email: req.body.email,
  //       password: req.body.password,
  //       phone: req.body.phone,
  //     })
  //     .then((data) => {
  //       console.log(data);
  //       res.json(data);
  //     })
  //     .catch((err) => console.error(err.message));
  // } catch {
  //   res.json("Failed to add user info!");
  // }
};
