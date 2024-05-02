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


        container.innerHTML += `<div class="col-md-6 col-lg-4 col-xl-3 mb-4">
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