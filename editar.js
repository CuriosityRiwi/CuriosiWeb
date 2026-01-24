const form = document.getElementById("productForm");

const nameInput = document.getElementById("productName");
const categoryInput = document.getElementById("productCategory");
const descriptionInput = document.getElementById("productDescription");
const priceInput = document.getElementById("productPrice");

const params = new URLSearchParams(window.location.search);
const productId = params.get("id");
console.log(productId)
function getProducts() {
  return JSON.parse(localStorage.getItem("products")) || [];
}

if (productId) {
  const products = getProducts();
  const product = products.find((p) => p.id == productId);

  if (product) {
    nameInput.value = product.name;
    categoryInput.value = product.category;
    descriptionInput.value = product.description;
    priceInput.value = product.price;
  }
}

document.addEventListener("submit", (e) => {
  e.preventDefault();

  let products = getProducts();

  if (productId) {
    products = products.map((p) =>
      p.id == productId
        ? {
            ...p,
            name: nameInput.value,
            category: categoryInput.value,
            description: descriptionInput.value,
            price: priceInput.value,
          }
        : p,
    );
  } else {
    products.push({
      id: Date.now(),
      name: nameInput.value,
      category: categoryInput.value,
      description: descriptionInput.value,
      price: priceInput.value,
    });
  }

  localStorage.setItem("products", JSON.stringify(products));
  window.location.href = "./dash.html";
});
