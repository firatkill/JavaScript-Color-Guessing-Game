function randomRGB() {
  return `rgb(${(Math.random() * 255).toFixed(0)},${(
    Math.random() * 255
  ).toFixed(0)},${(Math.random() * 255).toFixed(0)})`;
}

function randomColors(name) {
  let random = randomRGB();
  document.querySelector(`${name}`).style.backgroundColor = `${random}`;
  document.querySelector(`${name}`).style.color = `${random}`;
}
changeAll();
function changeAll() {
  for (let i = 1; i < 7; i++) {
    randomColors(`#color${i}`);
  }
}
document.addEventListener("click", control);
function control(e) {
  if (
    e.target.style.backgroundColor !=
    document.querySelector("#question").textContent.toLowerCase()
  ) {
    console.log("naber");
  }
}

function randomQuestion() {
  document.querySelector("#question").textContent = document
    .getElementById(`color${(Math.random() * 6).toFixed(0)}`)
    .style.backgroundColor.toUpperCase();
}
randomQuestion();
