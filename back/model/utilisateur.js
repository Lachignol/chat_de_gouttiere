const { mongoose } = require("mongoose");

const userSchema = mongoose.Schema({
   
        pseudo:{type : String , required :true},
        mail:{type:String , required:true},
        password:{type:String , required:true},
        role:{type:String ,default:"User",required:false},
        
    })

let Users = mongoose.model("User" , userSchema)
module.exports = Users



