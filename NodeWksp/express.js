const bodyParser = require('body-parser');
const express = require('express');
const app = express();
const port = 3000;
//server created at port 3000 and on listening watch
app.listen(port,  () => {
    console.log(`Server listening at port : ${port}`);
});

//Middleware - before going to app.get functions
app.use((req,res, next)=>{
    console.log(`${req.method} - ${req.url}`);
    next();    
});
//required line for creating JSON type response/objects
app.use(bodyParser.json());
app.post('/',(req,res)=>{
    try{
        if(!req.body)
        { throw new Error('Missing request body');}
        let name = req.body.name;
        if(!name)
        {throw new Error('Missing name');}
        friends.push(name);
        res.send(friends.toString());
    }
    catch(err){
        res.status(500).send(err.message);
    }
});

//server app to respond to browser get requests at / directory end point
app.get('/', (req,res)=>{
    res.send({
        "Roll No" : "23MX128",
        "name" : "T V Perumal"
    })
});

const friends = [ "Ram", "Raj", "Kumar"];


//server app to respond to browser get requests at /friends/ directory end point
//and gets 
app.get('/friend/:num', (req,res) =>{
    try{
        let num = req.params.num;
        if(num <= friends.length)
        {
            res.send(friends[num-1]);
        }
        else
        {
            throw new Error('Sorry you have only ' + friends.length);
        }
    }
    catch (err)
    {
        res.status(500).send(err.message)
    }
});


