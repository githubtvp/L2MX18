//step 1
const express = require('express');
const app = express();
app.use(express.urlencoded({extended:true}));
//Step 1
const PORT = 3000;
app.listen(PORT, () =>{
    console.log(`Server listening on port ${PORT}`);
})

// //step 2
const connectDb = require('./DBConnect/mongoconnect');
//step2 
connectDb();

 const path = require('path');
 app.use((req,res, next) =>{
    console.log(`${req.method} - ${req.url}`);
    next();
 });
// // //step 3
const router = require('./routes/router.js');
app.use('/', router);
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));


// // //step 4
// // const bodyparser = require('body-parser');
// // app.use(bodyparser.json());


