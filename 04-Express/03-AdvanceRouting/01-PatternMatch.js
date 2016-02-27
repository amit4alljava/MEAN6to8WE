var express = require("express");
var app = express();
///ab+cd   e.g abcd, abbcd, abbbcd,
app.get('/ab?cd', function(req, res) {
    res.json("{id:1001,questions:[{qno:1001},{qno:1001},{qno:1001}]}");
});

app.listen(1234,function(){
   console.log("Server Start");
});