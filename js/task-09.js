const refBody = document.querySelector("body");
const refText = document.querySelector(".color");
const refBtn = document.querySelector(".change-color");

refBtn.addEventListener("click", changeColorBody);

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
function changeColorBody(e) {
  e.preventDefault();
  refBody.style.backgroundColor = getRandomHexColor();
  refText.textContent = getRandomHexColor();
}
