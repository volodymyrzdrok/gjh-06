const refs = {};
refs.form = document.querySelector(".login-form");

function checkForm(e) {
  e.preventDefault();
  const dataForm = e.target.elements;

  const elements = {
    email: dataForm.email.value,
    password: dataForm.password.value,
  };
  const { email, password } = elements;

  if (!email || !password) {
    alert("you need to fill form!");
  } else {
    console.log(elements);
    e.target.reset();
  }
}
refs.form.addEventListener("submit", checkForm);
