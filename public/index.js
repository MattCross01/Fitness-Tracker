const workoutTypeSelect=document.querySelector("#type"),
cardioForm=document.querySelector(".cardio-form"),
resistanceForm=document.querySelector(".resistance-form"),
cardioNameInput=document.querySelector("#cardio-name"),
nameInput=document.querySelector("#name"),
weightInput=document.querySelector("#weight"),
setsInput=document.querySelector("#sets"),
repsInput=document.querySelector("#reps"),
durationInput=document.querySelector("#duration"),
resistanceDurationInput=document.querySelector("#resistance-duration"),
distanceInput=document.querySelector("#distance"),
completeButton=document.querySelector("button.complete"),
addButton=document.querySelector("button.add-another"),
toast=document.querySelector("#toast"),
newWorkout=document.querySelector(".new-workout");

let workoutType=null,shouldNavigateAway=!1;

async function init()
{if(location.pathname.includes("/exercise")&&void 0===location.search.split("=")[1])

{console.log("excercise");const e=await API.createWorkout(),

t=await API.getLastWorkout();return t?location.search="?id="+t._id:e.classList.add(""),
console.log(e)}if(void 0===location.search.split("=")[1])

{const e=await API.getLastWorkout();
  
  e?location.search="?id="+e._id:newWorkout.classList.add("")}}
  
  function handleWorkoutTypeChange(e){"cardio"===(workoutType=e.target.value)?
  
  (cardioForm.classList.remove("d-none"),
  
  resistanceForm.classList.add("d-none")):"resistance"===workoutType?(resistanceForm.classList.remove("d-none"),
  
  cardioForm.classList.add("d-none")):(cardioForm.classList.add("d-none"),
  resistanceForm.classList.add("d-none")),
  validateInputs()}function validateInputs(){let e=!0;"resistance"===workoutType?
  (""===nameInput.value.trim()&&(e=!1),
  ""===weightInput.value.trim()&&(e=!1),
  ""===setsInput.value.trim()&&(e=!1),
  ""===repsInput.value.trim()&&(e=!1),
  ""===resistanceDurationInput.value.trim()&&(e=!1)):"cardio"===workoutType&&(""===cardioNameInput.value.trim()&&(e=!1),
  ""===durationInput.value.trim()&&(e=!1),
  ""===distanceInput.value.trim()&&(e=!1)),
  
  e?(completeButton.removeAttribute("disabled"),
  
  addButton.removeAttribute("disabled")):(completeButton.setAttribute("disabled",!0),
  addButton.setAttribute("disabled",!0))}async function handleFormSubmit(e){e.preventDefault();let t={};
  
  "cardio"===workoutType?(t.type="cardio",t.name=cardioNameInput.value.trim(),
  t.distance=Number(distanceInput.value.trim()),
  t.duration=Number(durationInput.value.trim())):"resistance"===workoutType&&(t.type="resistance",t.name=nameInput.value.trim(),
  t.weight=Number(weightInput.value.trim()),
  t.sets=Number(setsInput.value.trim()),
  t.reps=Number(repsInput.value.trim()),
  t.duration=Number(resistanceDurationInput.value.trim())),
  
  await API.addExercise(t),clearInputs(),toast.classList.add("success")}function handleToastAnimationEnd(){toast.removeAttribute("class"),
  
  shouldNavigateAway&&(location.href="/")}
  
  function clearInputs()
  
  {cardioNameInput.value="",
  nameInput.value="",
  setsInput.value="",
  distanceInput.value="",
  durationInput.value="",
  repsInput.value="",
  resistanceDurationInput.value="",
  weightInput.value=""}
  
  init(),workoutTypeSelect&&workoutTypeSelect.addEventListener("change",handleWorkoutTypeChange),
  
  completeButton&&completeButton.addEventListener("click",
  
  function(e){shouldNavigateAway=!0,handleFormSubmit(e)}),
  
  addButton&&addButton.addEventListener("click",handleFormSubmit),
  
  toast.addEventListener("animationend",handleToastAnimationEnd)
  
  ,document.querySelectorAll("input").forEach(e=>e.addEventListener("input",validateInputs));