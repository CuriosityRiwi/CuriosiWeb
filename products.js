// Variables Globales
const addListproducts = document.querySelector("#list");
const addProductButton = document.querySelector(".add");
const updateButton = document.querySelector(".update");
const deleteButton = document.querySelector(".delete");

// list prueva
const products = [
  {
    id: 2,
    image: "./img/icons/icon-tenis.png",
    name: "zapato",
    description: "zapato de cuero",
    price: 550442,
    stock: 5,
    viewStatus: "publicado",
  },
];

// Guardo datos en localStorage
localStorage.setItem("products", JSON.stringify(products));

// Traer datos del localStorage
const data = localStorage.getItem("products");
const productsList = data ? JSON.parse(data) : [];

// Para mostrar los productos
function renderProducts() {
  productsList.forEach((product) => {
    const row = `
            <tr>
                <td><img src="${product.image}" alt="${product.name}" width="50"></td>
                <td>${product.name}</td>
                <td>${product.description}</td>
                <td>${product.price}</td>
                <td>${product.stock}</td>
                <td>${product.viewStatus}</td>
                <td>
                    <button class="btn btn-sm btn-warning update">Edit</button>
                    <button class="btn btn-sm btn-danger delete">Delete</button>
                </td>
            </tr>
        `;
    document.getElementById("list").innerHTML += row;
  });
}

// Acciones de Botones

function addProduct() {
  addProductButton.addEventListener("click", function () {
    window.open("./addProduct.html", "_self");
  });
}

function updateProduct() {}
function deleteProduct() {}
renderProducts();
addProduct();
