
const monthly = document.getElementById("monthly");
const yearly = document.getElementById("yearly");

const precoP = document.querySelector("#precoP");
const precoB = document.querySelector("#precoB");

monthly.addEventListener("change", () => {
  if (monthly.checked) {
    precoP.textContent = "$15";
	precoB.textContent = "$7";
  }
});

yearly.addEventListener("change", () => {
  if (yearly.checked) {
    precoP.textContent = "$99";
	precoB.textContent = "$79";
  }
});


