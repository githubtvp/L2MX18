const router = require('./routes/router.js')
const connectDb = require('./DBConnect/mongoconnect')
const express = require('express');
//const bodyparser = require('body-parser');


const app = express();
app.use(express.urlencoded({extended:true}));
//app.use(bodyparser);
app.use('/',router);

const PORT = 3500;
app.listen(PORT, () =>{
    console.log(`Server listening on port ${PORT}`);
})

connectDb();