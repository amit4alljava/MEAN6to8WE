
var express = require("express");
var app = express();
var compression = require('compression');

app.use(compression()); //use compression
app.use(express.static('public'));

app.get("/home",function(req,res){
   res.sendFile(__dirname+'/public/pages/index.html');
});
app.listen(1234,function(){
   console.log("Server Start ");
});