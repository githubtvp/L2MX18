//step 3
const router = require('./routes/router.js')
//step 2
const connectDb = require('./DBConnect/mongoconnect')
//const DBclient = require('./DBConnect/DBConnect')
//step 1
const express = require('express');
//step 4
const bodyparser = require('body-parser');


const app = express();
app.use(express.urlencoded({extended:true}));
app.use(express.static('styles'));
app.use(express.static('images'));
app.use(express.static('scripts'));


app.use(bodyparser.json());
app.use('/',router);



//Step 1
const PORT = 3500;
app.listen(PORT, () =>{
    console.log(`Server listening on port ${PORT}`);
})

//step2 
connectDb();
