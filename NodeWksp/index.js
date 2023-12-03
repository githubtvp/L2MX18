//Steps to create a http server
var http = require('http');
//create a server object
http.createServer(function(req,res){
    res.write('Hello World');//write a response to the client
    res.end();//end the response
}).listen(3000);//the server object listens on port 3000

//Demonstartes the use of a function from another file
var getMax = require('./max.js');//requires the max.js file 
let arr = [1, 70, 100, 20, 5];
console.log("Max = ", getMax(arr));//uses the getMax function in max.js file

