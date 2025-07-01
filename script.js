// Animate experience counter
let counter = document.getElementById("years");
let years = 5;
let current = 0;
let interval = setInterval(() => {
  if (current >= years) clearInterval(interval);
  counter.innerText = current++;
}, 200);

// Toggle About dropdown
function toggleAbout() {
  document.getElementById("more-about").classList.toggle("hidden");
}
