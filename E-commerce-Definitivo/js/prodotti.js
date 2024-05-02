let arrayProdotti = [];
const URLProdotti = "https://dummyjson.com/products";

function ottieniDati() {
    fetch(URLProdotti)
        .then(res => res.json())
        .then(data => {
            creaProdotto(data.products);
            console.log(data.products);
        })

}
ottieniDati();

function creaProdotto(products) {
    let container = document.querySelector('#prodottiP');

    products.forEach(product => {
        /*let card = document.createElement('div');
        card.classList.add('card', 'col-lg-3', 'col-md-6');*/


        container.innerHTML += `<div class="nuovoProdotto col-md-6 col-lg-4 col-xl-3 mb-4" data-categoria="${product.category}">
        <div class="card h-100">
        <div style="background-image: url(${product.images[0]})" class="imgProd">
        </div>
            <div class="card-body">
                <h5 class="card-title">${product.title}</h5>
                <p class="card-text">Prezzo: ${product.price} € </p>
                <p class="card-text">${product.description}</p>
            </div>
            <div class="card-footer">
                <button class="btn btn-primary add-to-cart" data-name="${product.title}" data-price="${product.price}">Aggiungi al carrello</button>
            </div>
        </div>
        </div>
    `;
    });
}

function btnOnOff() {
    let btnFiltri = document.querySelectorAll('.btnFiltro');
    btnFiltri.forEach(btn => {

        btn.classList.remove('btn-primary');
        btn.classList.add('btn-outline-primary');
    });


    this.classList.remove('btn-outline-primary');
    this.classList.add('btn-primary');
}


let btnFiltri = document.querySelectorAll('.btnFiltro');
btnFiltri.forEach(btn => {
    btn.addEventListener('click', function () {
        btnOnOff.call(this);
    });
});


function filtro(categoria) {
    
    let arrayProd = document.querySelectorAll('.nuovoProdotto');
    arrayProd.forEach(element => {
        if (element.getAttribute("data-categoria") == categoria) {
            element.classList.add('d-block');
        } else {
            element.classList.add('d-none');
        } 
    
    });

}

let buttonAll = document.querySelector('.all');
let buttonSmartphones = document.querySelector('.smartphones');
let buttonLaptop = document.querySelector('.laptop');
let buttonFragrances = document.querySelector('.fragrances');
let buttonSkincare = document.querySelector('.skincare');
let buttonGroceries = document.querySelector('.groceries');
let buttonHomeDecoration = document.querySelector('.home-decoration');

buttonSmartphones.addEventListener('click', function () {
    filtro("smartphones");
    btnOnOff();
});

buttonLaptop.addEventListener('click', function () {
    filtro("laptop");
    btnOnOff();
});

buttonFragrances.addEventListener('click', function () {
    filtro("fragrances");
    btnOnOff();
});

buttonSkincare.addEventListener('click', function () {
    filtro("skincare");
    btnOnOff();
});

buttonGroceries.addEventListener('click', function () {
    filtro();
    btnOnOff();
});

buttonHomeDecoration.addEventListener('click', function () {
    filtro();
    btnOnOff();
});

buttonAll.addEventListener('click', function () {
    filtro();
    btnOnOff();
});


