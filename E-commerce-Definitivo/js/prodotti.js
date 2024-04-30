let arrayProdotti = [];
const URLProdotti = "https://dummyjson.com/products";

async function ottieniDati() {
    await fetch(URLProdotti)
    .then(data => {
        return data.json()
    })
    .then(response => {
        console.log(response);

        creaProdotto(response);
    })
}
ottieniDati();


let cardProdotto = document.querySelector('#container-card');

async function creaProdotto(product) {
    await product.forEach(prodotto => {
        
        let card = `<div class="card col-lg-2">
            <img src="${prodotto.images}" class="card-img-top" alt="cat">
            <div class="card-body">
                <div class="card-title fs-5">${prodotto.title}</div>
                <p class="card-text">${prodotto.description}</p>
                <a href="#" class="btn btn-primary">
                    <i class="bi bi-cart-plus"></i>
                    Aggiungi al Carrello</a>
            </div>`;
            cardProdotto.innerHTML += card;
    });

}