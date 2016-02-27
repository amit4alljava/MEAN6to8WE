var db = require("./connection");
var mongoose = require("mongoose");
var MessageSchema = new mongoose.Schema({"userid":String,"message":String,"username":String,"like":Number,"unlike":Number});

var Message = mongoose.model("messages",MessageSchema);
module.exports=Message;