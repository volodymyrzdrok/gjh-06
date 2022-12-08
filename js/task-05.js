const refInput = document.querySelector("#name-input");
const refSpanTitle = document.querySelector("#name-output");

function changeSpanTitle(e) {
  const newText = e.target.value;
  refSpanTitle.textContent = newText.length > 0 ? newText : "Anonymous";
}

refInput.addEventListener("input", changeSpanTitle);
