const tableBody = document.getElementById("productsTable");

function getProducts() {
  return JSON.parse(localStorage.getItem("products")) || [];
}

function renderProducts() {
  const products = getProducts();
  tableBody.innerHTML = "";

  if (products.length === 0) {
    tableBody.innerHTML = `
      <tr>
        <td colspan="6" class="text-center text-muted">
          No products added yet
        </td>
      </tr>
    `;
    return;
  }

  products.forEach(product => {
    tableBody.innerHTML += `
      <tr>
        <td>
          <div class="product-img"></div>
        </td>
        <td class="fw-semibold">${product.name}</td>
        <td>
          <span class="badge-soft">${product.category}</span>
        </td>
        <td>$${product.price}</td>
        <td class="status-green">In stock</td>
        <td>
          <button class="btn btn-sm btn-outline-primary"
            onclick="editProduct(${product.id})">
            <i class="bi bi-pencil"></i>
          </button>
        </td>
      </tr>
    `;
  });
}

function editProduct(id) {
  window.location.href = `../editar/editar.html?id=${id}`;
}

renderProducts();
