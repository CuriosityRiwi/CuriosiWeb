// Variables Globales
const name = document.querySelector(".name");
const brand = document.querySelector(".brand");
const description = document.querySelector(".description");
const price = document.querySelector(".price");
const stock = document.querySelector(".stock");
const info = document.querySelector(".info");



// Data
const data = localStorage.getItem("products");
let shoes = data ? JSON.parse(data) : [];


// Traigo el id por Storage
let id = localStorage.getItem("id");
console.log(id)

function renderEdit(){
    id = shoes.filter((e) => e.id == id);
    console.log(id)
    info.innerHTML = `
            <div class="row g-4">
          <!-- Column Izquierda left -->
          <div class="col-lg-8">
            <!-- Basic Information -->
            <div class="card mb-4">
              <div class="card-body">
                <h5 class="card-title mb-3">Basic Information</h5>

                <div class="mb-3">
                  <label class="form-label">Product Name</label>
                  <input
                    type="text"
                    class="form-control name"
                    value="${id[0].name}"
                    
                  />
                </div>

                <div class="row mb-3">
                  <div class="col-md-6">
                    <label class="form-label">Brand</label>
                    <input type="text" class="form-control brand" value="${id[0].brand}" />
                  </div>
                </div>

                <div>
                  <label class="form-label">Product Description</label>
                  <textarea class="form-control description" rows="4">
${id[0].description}
              </textarea
                  >
                </div>
              </div>
            </div>

            <!-- Preci Stock and View Status -->
            <div class="card mb-4">
              <div class="card-body">
                <h5 class="card-title mb-3">Pricing & Inventory</h5>

                <div class="row">
                  <div class="col-md-6">
                    <label class="form-label">Price ($)</label>
                    <input type="text" class="form-control price" value="${id[0].price}" />
                  </div>
                  <div class="col-md-6">
                    <label class="form-label">Stock</label>
                    <input type="text" class="form-control stock" value="${id[0].stock}" />
                  </div>
                  <div class="col-md-6 mt-3">
                    <label class="form-label">View Status</label>
                    <select class="form-select status ">
                      <option selected>Visible</option>
                      <option selected>Not Visible</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>

            <!-- Images -->
            <div class="card">
              <div class="card-body">
                <h5 class="card-title mb-3">Product Images</h5>

                <div class="d-flex gap-3">
                  <div class="border rounded p-2">
                    <img src="racket.png" width="100" />
                  </div>
                  <div
                    class="border rounded d-flex align-items-center justify-content-center"
                    style="width: 100px; height: 100px"
                  >
                    <span class="text-muted">Add Image</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Column Derecha Rigth -->
          <div class="col-lg-4">
            <div class="card">
              <div class="card-body text-center">
                <span class="badge bg-success mb-2">NEW ARRIVAL</span>

                <img
                  src="racket.png"
                  class="img-fluid my-3"
                  style="max-height: 220px"
                />

                <p class="text-muted mb-1">TENNIS RACKETS</p>
                <h5 class="fw-bold">Wilson Pro Staff 97 v14</h5>

                <h4 class="text-success fw-bold">$269.00</h4>

                <button class="btn btn-dark w-100 mt-3">Add to Cart</button>
              </div>
            </div>
          </div>
       </div>
    `
    
}

// Eventos
document.addEventListener("click", function (e) {

  if (e.target.classList.contains("save")) {

    const name = document.querySelector(".name").value;
    const brand = document.querySelector(".brand").value;
    const description = document.querySelector(".description").value;
    const price = document.querySelector(".price").value;
    const stock = document.querySelector(".stock").value;

    shoes = shoes.map((e) =>
      e.id == id
        ? { ...e, name: name, brand, description, price, stock }
        : e
    );

    localStorage.setItem("products", JSON.stringify(shoes));
    alert("Producto actualizado ✅");
  }
});

renderEdit();