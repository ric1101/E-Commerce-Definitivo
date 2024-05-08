
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
                <button class="btn btn-primary add-to-cart" data-name="${product.title}" data-price="${product.price}" data-image="${product.images[0]}" data-id="${product.id}">Aggiungi al carrello</button>
                <button class="btn btn-info mt-2 show-product" data-name="${product.title}" data-price="${product.price}" data-image="${product.images[0]}" data-id="${product.id}">Dettagli</button>
            </div>
        </div>
        </div>
    `;
    });
    inviaAlCarrello()
    inviaPaginaInfo()
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
        let prendiAttributo = this.getAttribute('data-categoria')
        filtro(prendiAttributo);
    });
});


function filtro(categoria) {
    let arrayProd = document.querySelectorAll('.nuovoProdotto');
    arrayProd.forEach(element => {
        if (!categoria || element.getAttribute("data-categoria") === categoria) {
            element.classList.remove('d-none');
            element.classList.add('d-block');
        } else {
            element.classList.remove('d-block');
            element.classList.add('d-none');
        }
    });
}

let arrayId = [];

function inviaAlCarrello() {

    let bottoniCarrello = document.querySelectorAll('.add-to-cart');
    let controlloStorage = JSON.parse(localStorage.getItem('arrayId'));
    console.log(bottoniCarrello);
    if (controlloStorage) {
        arrayId = controlloStorage;
    }
    bottoniCarrello.forEach(btn => {
        btn.addEventListener('click', function () {
            let id = btn.getAttribute('data-id');
            arrayId.push(id);
            console.log(arrayId);
            localStorage.setItem('arrayId', JSON.stringify(arrayId));
            contoCarrello();

        });

    });
}


function inviaPaginaInfo() {

    let info = document.querySelectorAll('.show-product');
    console.log(info);
    info.forEach(btn => {
        btn.addEventListener('click', function () {
            const id = btn.getAttribute('data-id');
            console.log(id);
            localStorage.setItem('info', JSON.stringify(id));
            window.location.href = 'http://127.0.0.1:5500/E-commerce-Definitivo/info-prodotti.html';
        });
    });
}


let arrayCarrello = [];
let numeroArticoli = document.querySelector('#numeroArticoli');
let numProdotti = 0;

function contoCarrello() {
    console.log(numProdotti);

    arrayCarrello = JSON.parse(localStorage.getItem('arrayId'));

    numProdotti = arrayCarrello.length;
    numeroArticoli.innerHTML = numProdotti;

    if (numProdotti == 0) {
        numeroArticoli.innerHTML = null;
    }

}
contoCarrello();