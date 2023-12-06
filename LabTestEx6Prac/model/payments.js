const payTable = require("mongoose");
const loginTable = require("mongoose");
const paymentSchema = new payTable.Schema({
  paymentMethod: String,
  cardName: String,
  cardNumber: Number,
  expiryDate: String,
});

const loginSchema = new loginTable.Schema({
  loginId: String,
  password: String,
});
module.exports = {
  payments: paymentSchema,
  login: loginSchema,
};
