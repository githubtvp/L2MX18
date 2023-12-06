const { default: mongoose } = require("mongoose");
const payTable = require("mongoose");
const userTable = require("mongoose");
const paymentSchema = new payTable.Schema({
  paymentmethod: String,
  cardname: String,
  cardno: Number,
  expirydate: String
});

const userSchema = new userTable.Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true }
  // Other user fields as needed
});

const User = mongoose.model('User', userSchema);

module.exports = User;


//module.exports = mongoose.model("Payments", paymentSchema);
//module.exports = mongoose.model("Login", loginSchema);

module.exports = {
  Payments: mongoose.model("Payments", paymentSchema),
  User: mongoose.model("User", userSchema)
};
