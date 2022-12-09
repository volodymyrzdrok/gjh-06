const refInput = document.querySelector("#validation-input");

const validNumber = Number(refInput.dataset.length);

refInput.addEventListener("blur", checkValue);

function checkValue(e) {
  const text = e.target.value;
  text.length === validNumber
    ? refInput.classList.replace("invalid", "valid")
    : refInput.classList.add("invalid");
}
