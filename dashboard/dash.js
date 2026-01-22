const tableBody = document.getElementById("productsTable");

const products = JSON.parse(localStorage.getItem("products")) || [];

if (products.lengtj === 0){
    tableBody.innerHTML =`
    <tr>
      <td colspan="6" class="text-center text-muted">
        No products added yet
      </td>
    </tr>
  `;
} 