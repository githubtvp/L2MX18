const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const app = express();
app.use(express.urlencoded({extended:true}));
const port = 3000;
const mongoose = require('mongoose');
const mongoUrl = "mongodb://127.0.0.1/my_database";
mongoose.set("strictQuery", true);

mongoose.connection.on("open" , ()=> {
    console.log("connection with mongoDB successful");
});

async function connectDB() {
    await mongoose.connect(mongoUrl , {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });
}
connectDB();

app.use((req, res, next) => {
    console.log(`${req.method} - ${req.url}`);
    next();
});

app.use(bodyParser.json());
const friendsRoute = require('./routes/friendsRoute');
app.use('/friends' , friendsRoute);
//app.use('/' , friendsRoute);
app.use(express.static(path.join(__dirname, 'public')));

app.listen(port, () => {
    console.log("Server listening in port ", port);
});

