var mongoose = require("mongoose");
var jade = require("jade");
var fs = require("fs");
var path=require("path");

function insertNewMessage(userid, message,username,response){
     /*var db = require("./connection");
    var MessageSchema = new mongoose.Schema({"userid":String,"message":String,"username":String});
    // mongoose.model('name', schema, collectionName); // if the collection name is not plural
    var Message = mongoose.model("messages",MessageSchema);*/
    var Message = require("./messageModel");
    console.log("Userid "+userid+" Message "+message);
    var msgObject  = new Message({"userid":userid,"message":message,"username":username,"like":0,"unlike":0});
    msgObject.save(function(error,doc){
       if(error){
           response.end("Error in Message Insertion ",error);
       }
        else{
            readMessages(Message,response);
           //response.end("Message Saved SuccessFully...");
       }
    });
}
function readMessages(MessageModel,response){
    MessageModel.find({},function(error,docs){
        if(error){
            response.end("Can't Show Messages");
        }
        else
        {
            var resourcePath = path.join(__dirname,'/templates/messages.jade');
            fs.readFile(resourcePath,function(error,content){
                var template = jade.compile(content);
                var data = {"docs":docs};
                var html  = template(data);
                response.end(html);
            });


        }
    });
}
function updateLike( id,response){



    var Message = require("./messageModel");
    var conditions = { _id: id };
    var update = { $inc: { "like": 1 }};
    var options = { multi: true };
    Message.update(conditions, update, options, function(error,numberRowEffected){
        if(error){
            console.log("Error in Like Updation ",error);
        }
        else{
            console.log(" Like Updation Done ",numberRowEffected)
            var likeObject = {"count":numberRowEffected};
            response.end(JSON.stringify(likeObject));
        }
    });
    //console.log("Userid "+userid+" Message "+message);
}
module.exports.updateOpr=updateLike;
module.exports.insertNewMessage=insertNewMessage;
//module.exports=readMessages;