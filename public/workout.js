async function init()
{const t=await API.getLastWorkout();
  console.log(t),document.querySelector("a[href='/exercise?']")
  .setAttribute("href",`/exercise?id=${t._id}`),
  
  renderWorkoutSummary({date:formatDate(t.day),
    totalDuration:t.totalDuration,numExercises:t.exercises.length,
    ...tallyExercises(t.exercises)})}
    
    function tallyExercises(t)
      {return t.reduce((t,e)=>("resistance"===e.type?
      (t.totalWeight=(t.totalWeight||0)+e.weight,t.totalSets=(t.totalSets||0)+e.sets,t.totalReps=(t.totalReps||0)+e.reps):"cardio"===e.type&&
      (t.totalDistance=(t.totalDistance||0)+e.distance),t),{})}
      
      function formatDate(t){return new Date(t).toLocaleDateString
        ({weekday:"long",year:"numeric",month:"long",day:"numeric"})}
        
        function renderWorkoutSummary(t){const e=document.querySelector(".workout-stats")
        ,o={date:"Date",totalDuration:"Total Workout Duration",
        numExercises:"Exercises Performed",
        totalWeight:"Total Weight Lifted",
        totalSets:"Total Sets Performed",
        totalReps:"Total Reps Performed",
        totalDistance:"Total Distance Covered"};
        
        Object.keys(t).forEach(a=>{const r=document.createElement("p"),
        n=document.createElement("strong");
        n.textContent=o[a];
        const s=document.createTextNode(`: ${t[a]}`);
        r.appendChild(n),r.appendChild(s),e.appendChild(r)})}
        init();