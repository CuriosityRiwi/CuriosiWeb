// ======================
// REFERENCIAS DEL FORM
// ======================
const form = document.getElementById("productForm");

const nameInput = document.getElementById("productName");
const brandInput = document.getElementById("productBrand");
const descriptionInput = document.getElementById("productDescription");
const priceInput = document.getElementById("productPrice");
const stockInput = document.getElementById("productStock");
const statusInput = document.getElementById("productStatus");
const imgInput = document.getElementById("productImg");

// ======================
// ID DEL PRODUCTO (si viene por URL)
// ======================
const params = new URLSearchParams(window.location.search);
const productId = Number(params.get("id"));

// ======================
// FUNCIONES AUXILIARES
// ======================
function getProducts() {
  return JSON.parse(localStorage.getItem("products")) || [];
}

function addProduct() {
  return {
    id: Date.now(), // genera un ID único
    name: nameInput.value,
    brand: brandInput.value,
    description: descriptionInput.value,
    price: priceInput.value,
    stock: stockInput.value,
    status: statusInput.value,
    img: "", // por ahora sin imagen
  };
}

function updateProduct(products) {
  return products.map((p) =>
    p.id === productId
      ? {
          ...p,
          name: nameInput.value,
          brand: brandInput.value,
          description: descriptionInput.value,
          price: priceInput.value,
          stock: stockInput.value,
          status: statusInput.value,
          img: p.img, // mantener imagen anterior
        }
      : p
  );
}

// ======================
// CARGAR PRODUCTO SI SE EDITA
// ======================
if (productId) {
  const products = getProducts();
  const product = products.find((p) => p.id === productId);

  if (product) {
    nameInput.value = product.name || "";
    brandInput.value = product.brand || "";
    descriptionInput.value = product.description || "";
    priceInput.value = product.price || "";
    stockInput.value = product.stock || "";
    statusInput.value = product.status || "visible";
    // imgInput.value NO se puede setear por seguridad del navegador
  }

  document.querySelector("h3").textContent = "Edit Product";
} else {
  document.querySelector("h3").textContent = "Add Product";
}

// ======================
// GUARDAR PRODUCTO (ADD / EDIT)
// ======================
form.addEventListener("submit", (e) => {
  e.preventDefault();

  let products = getProducts();

  if (productId) {
    // EDITAR
    products = updateProduct(products);
  } else {
    // AGREGAR
    products.push(addProduct());
  }

  localStorage.setItem("products", JSON.stringify(products));

  // Volver al dashboard
  window.location.href = "./dash.html";
});
