const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];
const list = document.querySelector("#ingredients");
list.style.listStyle = "none";

const createElements = (arr) => {
  arr.forEach((text, i, oldArr) => {
    const item = document.createElement("li");
    const itemText = document.createElement("p");

    list.append(item);
    itemText.textContent = text;
    item.append(itemText);
  });
};

createElements(ingredients);
