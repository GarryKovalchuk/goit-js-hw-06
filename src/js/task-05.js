const textInput = document.querySelector("#name-input");
const output = document.querySelector("#name-output");

textInput.addEventListener("input", () => {
  if (textInput.value === " ") {
    output.textContent = "Anonymous";
  } else {
    output.textContent = textInput.value;
  }
});
