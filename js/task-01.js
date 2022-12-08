const ref = {};
ref.list = document.querySelector("#categories");
ref.items = ref.list.children;

function counterCategories(items) {
  console.log("The number of categories in list : ", items.length);
  for (const item of items) {
    console.log("Category:", item.querySelector("h2").textContent);
    console.log("Elements:", item.querySelector("ul").children.length);
  }
}
counterCategories(ref.items);
