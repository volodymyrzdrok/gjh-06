function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const refs = {};
refs.boxes = document.querySelector("#boxes");
refs.conteiner = document.querySelector("#controls");
refs.inputNum = refs.conteiner.querySelector("input");
refs.btnCreate = refs.conteiner.querySelector("[data-create]");
refs.btnDestroy = refs.conteiner.querySelector("[data-destroy]");

refs.btnCreate.addEventListener("click", createBoxes);
refs.btnDestroy.addEventListener("click", destroyBoxes);

function createBoxes() {
  destroyBoxes();
  const valueInput = Number(refs.inputNum.value);
  const sizes = { height: 30, width: 30 };
  if (!Number.isNaN(valueInput) && valueInput > 0 && valueInput <= 100) {
    for (let i = 0; i < valueInput; i++) {
      refs.boxes.insertAdjacentHTML(
        "beforeend",
        `<div style="width: ${sizes.width}px; height: ${
          sizes.height
        }px; background-color: ${getRandomHexColor()}; margin-bottom: 2px; border: #000 solid 1px"></div>`
      );
      sizes.height += 10;
      sizes.width += 10;
    }
  } else {
    alert("you need to write correct number");
  }
}
function destroyBoxes() {
  refs.boxes.innerHTML = "";
}
