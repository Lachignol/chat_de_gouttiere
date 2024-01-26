const { mongoose } = require("mongoose");
const Checkpoints = require("./checkpoint");
const checkpoints = new Checkpoints();

const courseSchema = mongoose.Schema({
   titre:{type :String ,required:true},
   date:{type:String , required:true},
   hdd:{type:String , required:true},
   localisation:{
            longitude:{type:Number,required:true},
            latitude:{type:Number,required:true},
    },
    description:{type:String,required:true},
    flyer:{src:{type:String ,required:true}},
    checkpoints:{type:Array,required:false},
    chrono:{type:Array,require:false},


    })

let Courses = mongoose.model("Course" , courseSchema)

module.exports = Courses
