const {mongoose } = require("mongoose");
const payTable = require("mongoose");
const userTable = require("mongoose");

const paymentSchema = new payTable.Schema({
  paymentmethod: String,
  cardname: String,
  cardno: Number,
  expirydate: String
});
const userSchema = new userTable.Schema({
  userid: { type: String, required: true, unique: true },
  password: { type: String, required: true }
  // Other user fields as needed
});

module.exports = mongoose.model("Payments", paymentSchema);


module.exports = {
  Payments: mongoose.model("Payments", paymentSchema),
  User: mongoose.model("User", userSchema)
};
