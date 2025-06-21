const toggleIngredients = document.getElementById("toggleIngredients");
const toggleSteps = document.getElementById("toggleSteps");
const ingredientsList = document.querySelector(".ingredients");
const stepsList = document.querySelector(".steps");
const startCooking = document.getElementById("startCooking");
const timerDisplay = document.getElementById("timer");
const progress = document.querySelector(".progress");

let stepIndex = 0;
let stepItems = document.querySelectorAll(".steps li");

// Toggle Ingredients
toggleIngredients.addEventListener("click", () => {
  ingredientsList.classList.toggle("hidden");
  toggleIngredients.textContent = ingredientsList.classList.contains("hidden")
    ? "Show Ingredients"
    : "Hide Ingredients";
});

// Toggle Steps
toggleSteps.addEventListener("click", () => {
  stepsList.classList.toggle("hidden");
  toggleSteps.textContent = stepsList.classList.contains("hidden")
    ? "Show Steps"
    : "Hide Steps";
});

// Start Cooking Button
startCooking.addEventListener("click", () => {
  stepItems = document.querySelectorAll(".steps li");
  if (stepItems.length === 0) return;
  stepIndex = 0;
  stepItems.forEach((li) => (li.style.backgroundColor = ""));
  highlightStep(stepIndex);
  progress.style.width = "0%";
  startTimer(45);

  startCooking.textContent = "Next Step";
  startCooking.onclick = () => {
    if (stepIndex < stepItems.length - 1) {
      stepItems[stepIndex].style.backgroundColor = "#f1f1f1";
      stepIndex++;
      highlightStep(stepIndex);
      progress.style.width =
        ((stepIndex + 1) / stepItems.length) * 100 + "%";
    } else {
      startCooking.textContent = "Cooking Done!";
      stepItems[stepIndex].style.backgroundColor = "#f1f1f1";
      progress.style.width = "100%";
    }
  };
});

function highlightStep(index) {
  stepItems[index].style.backgroundColor = "#d9ead3";
}

// Bonus Timer
function startTimer(duration) {
  let time = duration * 60;
  const interval = setInterval(() => {
    let minutes = Math.floor(time / 60);
    let seconds = time % 60;
    timerDisplay.textContent = `Remaining Time: ${minutes}:${
      seconds < 10 ? "0" : ""
    }${seconds}`;
    if (--time < 0) {
      clearInterval(interval);
      timerDisplay.textContent = "Time's up!";
    }
  }, 1000);
}
