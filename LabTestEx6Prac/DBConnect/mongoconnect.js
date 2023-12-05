const mongoose = require('mongoose');

const mongourl = "mongodb://127.0.0.1/payments";
const connectDb = async function connectDB() {
    try {
        await mongoose.connect(mongourl); 
          console.log("Db connected")
    } catch (error) {
        console.error("db error");
    }
}
module.exports = connectDb;