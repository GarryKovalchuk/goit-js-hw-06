const validationInput = document.querySelector(
  "#validation-input"
);
validationInput.addEventListener("blur", () => {
  const dataLength =
    validationInput.getAttribute("data-length");
  const inputLength = validationInput.value.length;

  if (inputLength === Number(dataLength)) {
    validationInput.classList.add("valid");
    validationInput.classList.remove("invalid");
  } else {
    validationInput.classList.add("invalid");
    validationInput.classList.remove("valid");
  }
});
