const { mongoose } = require("mongoose");

const checkpointSchema = mongoose.Schema({
   
        name:{type : String , required :true},
        longitude:{type:Number , required:true},
        latitude:{type:Number , required:true},
        chrono:{type:Array,required:false},
        
        })

let Checkpoints = mongoose.model("Checkpoint" , checkpointSchema)

module.exports = Checkpoints



