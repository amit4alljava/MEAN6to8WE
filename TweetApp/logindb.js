var mongoose = require("mongoose");
var jade = require("jade");
var fs = require("fs");
var path=require("path");
function authenticateUser(userid,password,response){
    var connection = require("./connection");
    var UserSchema = new mongoose.Schema({"userid":String,"password":String,"username":String});
    // mongoose.model('name', schema, collectionName); // if the collection name is not plural
    var User = mongoose.model("users",UserSchema);
    console.log("UserId "+userid+" Password "+password);
    User.find({"userid":userid,"password":password},function(error,docs){
        if(error){
            response.end("Error Occur During Authenticate User ",error);
        }
        else{
            var templatePath  = path.join(__dirname,'/templates/welcomepage.jade');
            fs.readFile(templatePath,function(error,content){
                var template = jade.compile(content);
                var data = {"username":docs[0].username,"userid":docs[0].userid};
                var html  = template(data);
                response.end(html);
            });

        }
    });
}
module.exports=authenticateUser;