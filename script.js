
const countElement = document.getElementById("count");
const errorElement = document.getElementById("error");
const decrementButton = document.getElementById("decrement");
const incrementButton = document.getElementById("increment");
const clearButton = document.getElementById("clear");


let count = 0;
function updateUI() {
  countElement.textContent = count;
  if (count === 0) {
    errorElement.style.display = "block";
    decrementButton.disabled = true;
    clearButton.style.display = "none";
  } else {
    errorElement.style.display = "none";
    decrementButton.disabled = false;
    clearButton.style.display = "block";
  }
}
incrementButton.addEventListener("click", () => {
  count++;
  updateUI();
});
decrementButton.addEventListener("click", () => {
  if (count > 0) {
    count--;
  }
  updateUI();
});
clearButton.addEventListener("click", () => {
  count = 0;
  updateUI();
});

updateUI();
