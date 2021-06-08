var db=require("../models");
module.exports=function(o)

{o.get("/api/workouts",(o,t)=>{db.Workout.find({})

.then(o=>{t.json(o)}).catch(o=>{t.json(o)})})

,o.post("/api/workouts",async(o,t)=>{try{const o=await db.Workout.create({type:"workout"});

t.json(o)}catch(o){console.log("error occurred creating a workout: ",o)}})

,o.put("/api/workouts/:id",({body:o,params:t},e)=>{const n=t.id;let r=[];
    
    db.Workout.find({_id:n}).then(t=>{r=t[0].exercises,e.json(t[0].exercises);
        
        let s=[...r,o];console.log(s),function(o)
        
        {db.Workout.findByIdAndUpdate(n,{exercises:o},function(o,t){o&&console.log(o)})}
        
        (s)}).catch(o=>{e.json(o)})}),o.get("/api/workouts/range",
        
        (o,t)=>{db.Workout.find({})
        
        .then(o=>{t.json(o)}).catch(o=>{t.json(o)})})};