const mongoDB = require('mongoose');
//const client = mongoDB.MongoClient;
const url = "mongodb://127.0.0.1/exampleDB";

// const DBclient = client.connect(url, (error, db)=>{
// try{
//     console.log('DB Connection established');
//    // db.close();
// }
// catch(error)
// {
//     console.error("DB Connection Failed : " + error);
// }
//});
const connectDb = async function connectDB() {
    try {
        await mongoose.connect(mongourl); 
          console.log("Db connected")
    } catch (error) {
        console.error("db error");
    }
}
module.exports = connectDb;
//module.exports = DBclient;