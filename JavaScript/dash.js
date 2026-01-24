// ======================
// VARIABLES GLOBALES
// ======================
const addListproducts = document.querySelector("#productsTable");

// Traer datos del localStorage
let productsList = JSON.parse(localStorage.getItem("products")) || [];

// ======================
// FUNCION PARA RENDERIZAR PRODUCTOS
// ======================
function renderProducts() {
  addListproducts.innerHTML = "";
  productsList.forEach((product) => {
    const row = `
      <tr>
        <td>${product.id}</td>
        <td><img src="${product.img}" alt="${product.name}" width="50"></td>
        <td>${product.name}</td>
        <td>${product.description}</td>
        <td>${product.price}</td>
        <td>${product.stock}</td>
        <td>${product.status}</td>
        <td>
          <button class="btn btn-sm btn-warning update" onclick="editProduct(${product.id})">Edit</button>
          <button class="btn btn-sm btn-danger delete">Delete</button>
          <button class="btn btn-sm btn-success public">Publicar</button>
          <button class="btn btn-sm btn-secondary notPublic">Ocultar</button>
        </td>
      </tr>
    `;
    addListproducts.innerHTML += row;
  });
}

// ======================
// FUNCION PARA EDITAR
// ======================
function editProduct(id) {
  window.location.href = `./addProduct.html?id=${id}`;
}

// ======================
// EVENTOS GLOBALES
// ======================
document.addEventListener("click", function (event) {
  // BOTON ADD PRODUCT
  if (event.target.classList.contains("add")) {
    window.open("./addProduct.html", "_self");
    return; // salir para que no siga con la lógica de tabla
  }

  // SOLO TRATAR EVENTOS DENTRO DE FILA DE TABLA
  let fila = event.target.closest("tr");
  if (!fila) return; // evita el error cuando no hay <tr>
  let id = fila.children[0].textContent.trim();

  // DELETE
  if (event.target.classList.contains("delete")) {
    productsList = productsList.filter((e) => e.id != id);
    localStorage.setItem("products", JSON.stringify(productsList));
    renderProducts();
  }

  // PUBLICAR
  if (event.target.classList.contains("public")) {
    productsList = productsList.map((e) =>
      e.id == id ? { ...e, status: "public" } : e
    );
    localStorage.setItem("products", JSON.stringify(productsList));
    renderProducts();
  }

  // NO PUBLICAR
  if (event.target.classList.contains("notPublic")) {
    productsList = productsList.map((e) =>
      e.id == id ? { ...e, status: "no publicado" } : e
    );
    localStorage.setItem("products", JSON.stringify(productsList));
    renderProducts();
  }
});

// ======================
// LOG OUT
// ======================
document.addEventListener("click", (event) => {
  const boton = event.target.closest("#btnLogOut");
  if (boton) {
    sessionStorage.removeItem("session");
    window.location = "./login.html";
  }
});

// ======================
// RENDERIZAR PRODUCTOS AL CARGAR
// ======================
renderProducts();
