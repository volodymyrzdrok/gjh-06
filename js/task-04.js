const ref = {};
ref.conteiner = document.querySelector("#counter");
ref.btnDecrement = ref.conteiner.querySelector('[data-action="decrement"]');
ref.btnIncrement = ref.conteiner.querySelector('[data-action="increment"]');
ref.valueCounter = ref.conteiner.querySelector("#value");

let num = Number(ref.valueCounter.textContent);

ref.btnIncrement.addEventListener("click", getIncrement);
ref.btnDecrement.addEventListener("click", getDecrement);

function getIncrement() {
  ref.valueCounter.textContent = num += 1;
}
function getDecrement() {
  num > 0 ? (ref.valueCounter.textContent = num -= 1) : null;
}
