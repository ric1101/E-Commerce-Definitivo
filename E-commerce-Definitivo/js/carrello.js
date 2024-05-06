
let divProdotti = document.querySelector('#div-prodotti');


let nessunProdotto = `<div class="card rounded-3 mb-4" style="background-color: rgb(194, 193, 193);">
    <div class="card-body p-4">
        <div class="row d-flex justify-content-between align-items-center">
            <h2>Non ci sono Prodotti</h2>
        </div>
    </div>
    </div>`;
    
    let divTotaleOrdine = document.querySelector('#totale-ordini');
    
    function popolaCarrello() {
        let price = 0;
        let arrayCarrello = JSON.parse(localStorage.getItem('arrayId'));
        
        if(arrayCarrello != null) {
            
            console.log(arrayCarrello);
            for (let i = 0; i < arrayCarrello.length; i++) {
                
                const URLProdotto = `https://dummyjson.com/products/${arrayCarrello[i]}`;
                
                fetch(URLProdotto)
                .then(res => res.json())
                .then(data =>{
                    
                    divProdotti.innerHTML += `<div class="card rounded-3 mb-4">
                    <div class="card-body p-4">
                    <div class="row d-flex justify-content-between align-items-center">
                    <div class="col-md-2 col-lg-2 col-xl-2">
                    <img src="${data.images[0]}" class="img-fluid rounded-3" alt="Image">
                    </div>
                    <div class="col-md-3 col-lg-3 col-xl-3">
                    <p class="lead fw-normal mb-2">${data.title}</p>
                    </div>
                    <div class="col-md-3 col-lg-2 col-xl-2 offset-lg-1">
                    <h5 class="mb-0">${data.price} €</h5>
                    </div>
                    <div class="col-md-1 col-lg-1 col-xl-1 text-end">
                    <a href="#!" class="text-danger"><i class="fas fa-trash fa-lg"></i></a>
                    </div>
                    </div>
                    </div>
                    </div>`;
                    price += data.price;
                    divTotaleOrdine.innerHTML = `<h4> Totale ordine: ${price} € </h4>`;
                });
            }
        } else {
            divProdotti.innerHTML = nessunProdotto;
            divTotaleOrdine.innerHTML = `<h4> Totale ordine: ${price} € </h4>`;
        }
    
}
 

popolaCarrello();