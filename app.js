document.addEventListener("DOMContentLoaded", () => {
  changeAll();
  randomQuestion(6);
});
let level = "easy";
document.querySelector(".row-cols-3").addEventListener("click", control);
document.querySelector("#newColors").onclick = () => {
  changeAll();
};

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

function changeAll() {
  for (let i = 1; i < 7; i++) {
    randomColors(`#color${i}`);
  }
  randomQuestion(6);
}
let wrongAnswer = 0;

function control(e) {
  if (
    e.target.style.backgroundColor ==
    document.querySelector("#question").textContent.toLowerCase()
  ) {
    document.querySelector("#score").textContent++;
    if (document.querySelector("#score").textContent == 10) {
      document.querySelector("#score").textContent = "YOU WON!";
      document.querySelector("#score").style.backgroundColor = "green";
    }
    changeAll();
  } else {
    wrongAnswer++;
    if (wrongAnswer == 3) {
      document.querySelector("#score").textContent--;
      wrongAnswer = 0;
    }
  }
}

function randomQuestion(param) {
  document.querySelector("#question").textContent = document
    .getElementById(`color${(Math.random() * param).toFixed(0)}`)
    .style.backgroundColor.toUpperCase();
}
