//Simple application node and mongo
//Install 'express and mongoose' 'nodemon'
const express = require('express');
const mongoose = require('mongoose');

//creating a server
const app = express();
const PORT = 3000;

//Connecting DB
mongoose.connect("mongodb+srv://23mx128:<password>@cluster0.tqzqugl.mongodb.net/?retryWrites=true&w=majority"),
{
uesr
}
//creating a router
app.get('/index', (req,res) => {
    res.send('Sample application under development!');
})
app.listen(PORT, ()=>{
    console.log(`Server listening on the PORT : ${PORT}`);
})