const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];
const ulNew = document.querySelector("#ingredients");
ingredients.map((ingredient) => {
  const listNew = document.createElement("li");
  console.log(listNew);
  listNew.textContent = ingredient;
  listNew.classList.add("item");
  ulNew.appendChild(listNew);
});
