const refInput = document.querySelector("#font-size-control");
const refText = document.querySelector("#text");

function changeSizeText(e) {
  refText.style.fontSize = `${e.target.valueAsNumber}px`;
}
refInput.addEventListener("input", changeSizeText);
