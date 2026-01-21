const row = document.getElementById('row');
const cards = [
    {
        image : "./img/shoes/img-tenis-man (1).jpg",
        title : "adidas Performance",
        subtitle : "Tenis adidas Performance Response Runner 2 Negro",
        price : "187.900"
    },
    {
        image : "./img/shoes/img-tenis-man (1).jpg",
        title : "adidas Performance",
        subtitle : "Tenis adidas Performance Response Runner 2 Negro",
        price : "187.900"
    },
    {
        image : "./img/shoes/img-tenis-man (1).jpg",
        title : "adidas Performance",
        subtitle : "Tenis adidas Performance Response Runner 2 Negro",
        price : "187.900"
    },
    {
        image : "./img/shoes/img-tenis-man (1).jpg",
        title : "adidas Performance",
        subtitle : "Tenis adidas Performance Response Runner 2 Negro",
        price : "187.900"
    },
    {
        image : "./img/shoes/img-tenis-man (1).jpg",
        title : "adidas Performance",
        subtitle : "Tenis adidas Performance Response Runner 2 Negro",
        price : "187.900"
    }
];


cards.forEach(card => {
    row.innerHTML += `<div class="col-12 col-md-6 col-lg-3">
                        <div class="card h-100 shadow-sm border-0 p-3" style="border-radius: 15px;">
                            <img src="${card.image}" class="card-img-top" >
                            <div class="card-body">
                                <h5 class="card-title">${card.title}</h5>
                                <p class="card-text">${card.subtitle}</p>
                                <div class="d-flex justify-content-between align-items-end mt-2">
                                    <div>
                                        <span class="fs-4 fw-bold">${card.price}</span>
                                        <span class="text-muted small">/day</span>
                                    </div>
                                    <button class="btn btn-primary px-3" style="border-radius: 8px;">more info</button>
                                </div>
                            </div>
                        </div>
                    </div>`
})








