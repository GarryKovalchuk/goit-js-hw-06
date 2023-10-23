const loginForm = document.querySelector(".login-form");

loginForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const emailInput = loginForm.elements.email;
  const passwordInput = loginForm.elements.password;

  if (
    emailInput.value === "" ||
    passwordInput.value === ""
  ) {
    alert("All friends must be filled out");
  } else {
    const formData = {
      email: emailInput.value,
      password: passwordInput.value,
    };
    console.log(formData);
    loginForm.requestFullscreen();
  }
});
