const loginForm = document.querySelector(".login-form");

loginForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const emailInput = loginForm.elements.email;
  const passwordInput = loginForm.elements.password;
  const { email, password } = event.currentTarget.elements;
  if (
    emailInput.value === "" ||
    passwordInput.value === ""
  ) {
    alert("Прохання заповнити всі поля!");
  } else {
    const formData = {
      email: emailInput.value,
      password: passwordInput.value,
    };

    console.log(formData);
    loginForm.reset();
  }
});
