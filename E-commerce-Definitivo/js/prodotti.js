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
                <button class="btn btn-primary add-to-cart" data-name="${product.title}" data-price="${product.price}" data-image="${product.images[0]}" data-id="${product.id}">Aggiungi al carrello</button>
            </div>
        </div>
        </div>
    `;
    });
    inviaAlCarrello()
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
        filtro(this.dataset.categoria);
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


let buttonAll = document.querySelector('.all');
buttonAll.addEventListener('click', function () {
    btnOnOff.call(this);
    filtro();
});

let buttonSmartphones = document.querySelector('.smartphones');
buttonSmartphones.addEventListener('click', function () {
    btnOnOff.call(this);
    filtro("smartphones");
});

let buttonLaptop = document.querySelector('.laptops');
buttonLaptop.addEventListener('click', function () {
    btnOnOff.call(this);
    filtro("laptops");
});

let buttonFragrances = document.querySelector('.fragrances');
buttonFragrances.addEventListener('click', function () {
    btnOnOff.call(this);
    filtro("fragrances");
});

let buttonSkincare = document.querySelector('.skincare');
buttonSkincare.addEventListener('click', function () {
    btnOnOff.call(this);
    filtro("skincare");
});

let buttonGroceries = document.querySelector('.groceries');
buttonGroceries.addEventListener('click', function () {
    btnOnOff.call(this);
    filtro("groceries");
});

let buttonHomeDecoration = document.querySelector('.home-decoration');
buttonHomeDecoration.addEventListener('click', function () {
    btnOnOff.call(this);
    filtro("home-decoration");
});

let arrayId = [];
function inviaAlCarrello() {

    let bottoniCarrello = document.querySelectorAll('.add-to-cart');
    bottoniCarrello.forEach(btn => {
        btn.addEventListener('click', function(){
            let id = btn.getAttribute('data-id');
            arrayId.push(id);
            localStorage.setItem('arrayId', arrayId);

        });
        
    });
    
}