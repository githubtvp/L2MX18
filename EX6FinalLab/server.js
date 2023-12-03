const express = require('express');
const mongoose = require('mongoose');
//setting up router and server
const app = express();
const router = express.Router();
router.get('/',(req,res)=>{
    res.send('Hello');
})
app.use('/',router);
app.listen(3500,()=>{
    console.log(`Server is listening on the port:3500`);
})
