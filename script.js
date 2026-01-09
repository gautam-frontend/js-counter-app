const countEl = document.getElementById("count");
const incBtn = document.getElementById("inc");
const decBtn = document.getElementById("dec");
const resetBtn = document.getElementById("reset");

// Load value from localStorage
let count = localStorage.getItem("count")
  ? Number(localStorage.getItem("count"))
  : 0;

countEl.textContent = count;

// Increment
incBtn.addEventListener("click", () => {
  if (count >= 10) {
    alert("Max limit reached");
    return;
  }
  count++;
  countEl.textContent = count;
  localStorage.setItem("count", count);
});

// Decrement
decBtn.addEventListener("click", () => {
  if (count > 0) {
    count--;
    countEl.textContent = count;
    localStorage.setItem("count", count);
  }
});

// Reset
resetBtn.addEventListener("click", () => {
  count = 0;
  countEl.textContent = count;
  localStorage.removeItem("count");
});
