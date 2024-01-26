const { mongoose } = require("mongoose");

const chronoUserSchema = mongoose.Schema({
   userId:{type :String ,required:true},
   userName:{type:String , required:true},
   checkpointsOrder:{type:Array , required:true},
   finaleTime:{type:String,required:true},
    })

let ChronoUsers = mongoose.model("ChronoUser" , chronoUserSchema)

module.exports = ChronoUsers