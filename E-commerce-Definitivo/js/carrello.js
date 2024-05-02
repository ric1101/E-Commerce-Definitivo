
let divProdotti = document.querySelector('#div-prodotti');
let arrayCarrello = [];

let nessunProdotto = `<div class="card rounded-3 mb-4" style="background-color: rgb(194, 193, 193);">
    <div class="card-body p-4">
        <div class="row d-flex justify-content-between align-items-center">
            <h2>Non ci sono Prodotti</h1>
        </div>
    </div>
    </div>`

function popolaCarrello() {
    
    let ottieniArrayId = localStorage.getItem('arrayId');
    console.log(ottieniArrayId);
    const URLProdotto = `https://dummyjson.com/products/${arrayId[i]}`;
    
    fetch(URLProdotto)
    .then(res => res.json())
    .then(data =>{

        if (ottieniId != null) {
            divProdotti.innerHTML += `<div class="card rounded-3 mb-4">
            <div class="card-body p-4">
            <div class="row d-flex justify-content-between align-items-center">
            <div class="col-md-2 col-lg-2 col-xl-2">
            <img src="${data.images[0]}" class="img-fluid rounded-3" alt="Image">
            </div>
            <div class="col-md-3 col-lg-3 col-xl-3">
            <p class="lead fw-normal mb-2">${data.title}</p>
            </div>
            <div class="col-md-3 col-lg-3 col-xl-2 d-flex">
            <button data-mdb-button-init data-mdb-ripple-init class="btn btn-link px-2"
            onclick="this.parentNode.querySelector('input[type=number]').stepDown()">
            <i class="fas fa-minus"></i>
            </button>
            
            <input id="form1" min="0" name="quantity" value="1" type="number"
            class="form-control form-control-sm" />
            
            <button data-mdb-button-init data-mdb-ripple-init class="btn btn-link px-2"
            onclick="this.parentNode.querySelector('input[type=number]').stepUp()">
            <i class="fas fa-plus"></i>
            </button>
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
            
        } else {
            divProdotti.innerHTML = nessunProdotto;
            
        }

    });

    
}

popolaCarrello();

