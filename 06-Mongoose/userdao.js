
// Step - 1 require the mongoose module
var mongoose = require("mongoose");
// Step -2 Connect to the DB
mongoose.connect("mongodb://localhost:27017/userdb");
// Step -3 Represent Schema
var Schema = mongoose.Schema;
// Step -4  Creating Schema for the Collection
var userSchema= new Schema({"name":String,
    "id":{"type":String, "unique":true},"city":String,
    "dept":Object
});
var User = mongoose.model("users",userSchema);

User.create({"name":"Tom"},function(error,response){
   if(error){
       console.log("Can't Add Error Occured ",error);
   }
    else{
       console.log("Record Added...");
   }
});
//}
//}
//module.exports=dbOperations;
