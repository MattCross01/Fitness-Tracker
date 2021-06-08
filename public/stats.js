function generatePalette()
{return["#003f5c",
"#2f4b7c",
"#665191",
"#a05195",
"#d45087",
"#f95d6a",
"#ff7c43",
"ffa600",
"#003f5c",
"#2f4b7c",
"#665191",
"#a05195",
"#d45087",
"#f95d6a",
"#ff7c43",
"ffa600"]}

function populateChart(e){let a=duration(e),
  t=calculateTotalWeight(e),
  r=workoutNames(e);
  
  const o=generatePalette();
  
  let s=document.querySelector("#canvas").getContext("2d")
  ,d=document.querySelector("#canvas2").getContext("2d"),
   n=document.querySelector("#canvas3").getContext("2d"),
   l=document.querySelector("#canvas4").getContext("2d");
   
   new Chart(s,{type:"line",data:{labels:["Sunday",
   "Monday",
   "Tuesday",
   "Wednesday",
   "Thursday",
   "Friday",
   "Saturday"],
   
   datasets:[{label:"Workout Duration In Minutes",
   backgroundColor:"red",
   borderColor:"red",
   data:a,fill:!1}]},
   options:{responsive:!0,title:{display:!0},
   scales:{xAxes:[{display:!0,scaleLabel:{display:!0}}],
   yAxes:[{display:!0,scaleLabel:{display:!0}}]}}}),
   
   new Chart(d,{type:"bar",data:{labels:["Sunday",
   "Monday",
   "Tuesday",
   "Wednesday",
   "Thursday",
   "Friday",
   "Saturday"],
   
   datasets:[{label:"Pounds",data:t,backgroundColor:["rgba(255, 99, 132, 0.2)",
   "rgba(54, 162, 235, 0.2)",
   "rgba(255, 206, 86, 0.2)",
   "rgba(75, 192, 192, 0.2)",
   "rgba(153, 102, 255, 0.2)",
   "rgba(255, 159, 64, 0.2)"],
   
   borderColor:["rgba(255, 99, 132, 1)",
   "rgba(54, 162, 235, 1)",
   "rgba(255, 206, 86, 1)",
   "rgba(75, 192, 192, 1)",
   "rgba(153, 102, 255, 1)",
   "rgba(255, 159, 64, 1)"],
   
   borderWidth:1}]},
   options:
   {title:
    {display:!0,
      text:"Pounds Lifted"},
      scales:{yAxes:
    [{ticks:{beginAtZero:!0}}]}}}),
   
   new Chart(n,{type:"pie",data:{labels:r,datasets:
    [{label:"Excercises Performed",
    backgroundColor:o,data:a}]},
    options:{title:{display:!0,
      text:"Excercises Performed"}}}),
    
    new Chart(l,{type:"doughnut",
    data:{labels:r,datasets:[{label:"Excercises Performed",
    backgroundColor:o,data:t}]},
    options:{title:{display:!0,text:"Excercises Performed"}}})}
    
    function duration(e)
    {let a=[];return e.forEach(e=>{e.exercises.forEach(e=>{a.push(e.duration)})}),a}
    
    function calculateTotalWeight(e){let a=[];
      return e.forEach(e=>{e.exercises.forEach(e=>{a.push(e.weight)})}),a}
      
      function workoutNames(e){let a=[];
        return e.forEach(e=>{e.exercises.forEach(e=>{a.push(e.name)})}),a}
        
        fetch("/api/workouts/range").then(e=>e.json()).then(e=>{populateChart(e)}),
        
        API.getWorkoutsInRange();