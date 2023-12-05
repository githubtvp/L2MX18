const router = require('./routes/router.js')
//const connectDb = require('./DBConnect/mongoconnect')
const DBclient = require('./DBConnect/DBConnect')
const express = require('express');
const bodyparser = require('body-parser');


const app = express();
app.use(express.urlencoded({extended:true}));
app.use(express.static('styles'));
app.use(express.static('images'));
app.use(express.static('scripts'));




app.use(bodyparser.json());
app.use('/',router);






const PORT = 3000;
app.listen(PORT, () =>{
    console.log(`Server listening on port ${PORT}`);
})

//connectDb();
DBclient();