const mongoose=require("mongoose"),

Schema = mongoose.Schema,

workoutSchema=new Schema({day:{type:Date,default:Date.now},
 
  exercises:[{type:{type:String,trim:!0,
  required:"Enter an exercise type"},
  name:{type:String,trim:!0,required:"Enter an exercise name"},
  duration:{type:Number,
  required:"Enter an exercise duration in minutes"},
  weight:{type:Number},
  reps:{type:Number},
  sets:{type:Number},
  distance:{type:Number}}]},
  
  {toJSON:{virtuals:!0}});
  
  workoutSchema.virtual("totalDuration").get(function()
  {return this.exercises.reduce((e,t)=>e+t.duration,0)});
  
  const Workout = mongoose.model("Workout",workoutSchema);
  
  module.exports = Workout;