const API={async getLastWorkout()
 
  {const t=await fetch("/api/workouts")
 
  ,a=await t.json();return a[a.length-1]},
  
  async addExercise(t){const a=location.search.split("=")
  
  [1],o=await fetch("/api/workouts/"+a,
  
  {method:"PUT",headers:{"Content-Type":"application/json"},
  
  body:JSON.stringify(t)})
  ;return await o.json()}
  
  ,async createWorkout()
  
  {const t=await fetch("/api/workouts",
  
  {method:"POST",headers:{"Content-Type":"application/json"}});
  
  return await t.json()}
  
  ,async getWorkoutsInRange()
  
  {const t=await fetch("/api/workouts/range");return await t.json()}};