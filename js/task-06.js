const refInput = document.querySelector("#validation-input");

const validNumber = Number(refInput.dataset.length);

refInput.addEventListener("blur", checkValue);

function checkValue(e) {
  const text = e.target.value;
  console.log(text.length === validNumber);
  text.length === validNumber
    ? refInput.classList.replace("invalid", "valid")
    : refInput.classList.add("invalid");
}
