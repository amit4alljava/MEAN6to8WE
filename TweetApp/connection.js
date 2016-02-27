var mongoose = require("mongoose");
var config = require("./config");
var options={server: { poolSize: 5 }};
//var connectionObject = mongoose.connect("mongodb://localhost:27017/mean",options);
//var connectionObject = mongoose.connect("mongodb://localhost:27017/mean");
var connectionObject = mongoose.connect(config.db);
/*connectionObject.on('error', console.error.bind(console, 'Connection Error : '));
connectionObject.once('open', function(){
    console.log('Connection ok!');
});*/
module.exports=connectionObject;