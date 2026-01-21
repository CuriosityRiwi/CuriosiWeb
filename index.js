// main.js

const products = [
    { name: "AeroPro Strike G5", category: "RACKETS", price: 249.00, img: "./img/shoes/img-tenis-man (1).jpg" },
    { name: "SwiftCourt Elite X", category: "FOOTWEAR", price: 129.99, img: "./img/shoes/img-tenis-man (2).jpg" },
    { name: "ProTour 12-Pack Bag", category: "ACCESSORIES", price: 85.50, img: "./img/shoes/img-tenis-woman (1).jpg" },
    { name: "Championship Extra Duty", category: "BALLS", price: 14.00, img: "./img/shoes/img-tenis-woman (2).jpg" }
];


//Renderiza la informacion que trae de el contenedor de lista-cards
const renderProducts = () => {
    const container = document.getElementById("list-shoes");
    let html = "";

    products.forEach(p => {
        html += `
        <div class="col-12 col-md-6 col-lg-3">
            <div class="card h-100 border-0 shadow-sm rounded-4 position-relative">
                <button class="btn btn-light position-absolute top-0 end-0 m-3 rounded-circle shadow-sm" style="width: 35px; height: 35px; padding: 0;">
                    <i class="bi bi-heart"></i>
                </button>
                <img src="${p.img}" class="card-img-top rounded-top-4" alt="${p.name}" style="height: 200px; object-fit: contain;">
                <div class="card-body">
                    <small class="text-success fw-bold">${p.category}</small>
                    <h6 class="fw-bold mt-1">${p.name}</h6>
                    <div class="d-flex justify-content-between align-items-center mt-3">
                        <span class="fw-bold fs-5">$${p.price.toFixed(2)}</span>
                        <button class="btn btn-outline-dark btn-sm rounded-pill px-3">View Info <i class="bi bi-info-circle"></i></button>
                    </div>
                </div>
            </div>
        </div>`;
    });
    container.innerHTML = html;
};

// Función para WhatsApp
const abrirWpp = (coleccion) => {
    const tel = "57300000000";
    const msg = `Hola! Estoy interesado en ver la nueva colección de ${coleccion}.`;
    window.open(`https://wa.me/${tel}?text=${encodeURIComponent(msg)}`, "_blank");
};

// Ejecutar al cargar
renderProducts();

