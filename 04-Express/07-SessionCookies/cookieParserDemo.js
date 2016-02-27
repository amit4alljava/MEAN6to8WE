var express      = require('express');
var cookieParser = require('cookie-parser');

var app = express();
app.use(cookieParser());
app.get('/', function(req, res) {
    //expire time in milliseconds
    //req.coo
    res.cookie('mycolors' , 'red',{maxAge : 229999}).send('Cookie is set');
    console.log("Cookies: ", req.cookies);
})

app.listen(1234,function(){
    console.log("Server Start");
});