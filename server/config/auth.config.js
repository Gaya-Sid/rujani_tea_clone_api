require("dotenv").config({ path: path.join(__dirname, "../../.env") });

module.exports = {
  secret: process.env.secret,
};
