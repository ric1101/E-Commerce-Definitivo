

let title = document.querySelector('#title');
let description = document.querySelector('#description');
let price = document.querySelector('#price');
let bottone = document.querySelector('#bottone');
let imgPrincipale = document.querySelector('#imgPrincipale');
let imgGallery = document.querySelector('.gallery');


function mostraInfoProdotto() {

    let info = JSON.parse(localStorage.getItem('info'));

    const URLProdotto = `https://dummyjson.com/products/${info}`;

    
    console.log(info);
    
    fetch(URLProdotto)
    .then(res => res.json())
    .then(data => {
        
        let img = `<div><img src="./amazone-30-4-2024.png" class="img-fluid" alt=""></div>`
        
        title.innerHTML = data.title;
        description.innerHTML = data.description;
        price.innerHTML = '€ ' + data.price;
        bottone.setAttribute('data-id', data.id);
        imgPrincipale.setAttribute('src', data.images[0]);
        
        
        if (data.images.length > 2) {
            
            data.images.forEach(image => {
                
                imgGallery.innerHTML += `<div class="box-image"><img src="${image}" class="img-fluid thumb" alt=""></div>`
                
            });
            
            let thumbs = document.querySelectorAll('.thumb');
            thumbs.forEach(thumb => {
                
                thumb.addEventListener('click', function () {
                        let src = thumb.getAttribute('src');
                        imgPrincipale.setAttribute('src', src);

                    })
                });
            }

        });

}

mostraInfoProdotto();


let bottoniCarrello = document.querySelector('.add-to-cart');

let arrayId = [];

function inviaAlCarrello() {
    let controlloStorage = JSON.parse(localStorage.getItem('arrayId'));
    console.log(bottoniCarrello);

    if (controlloStorage) {
        arrayId = controlloStorage;
    }
    let id = bottone.getAttribute('data-id');
    arrayId.push(id);
    console.log(arrayId);
    localStorage.setItem('arrayId', JSON.stringify(arrayId));
}

bottoniCarrello.addEventListener('click', function () {
    inviaAlCarrello();
    contoCarrello();

});

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

