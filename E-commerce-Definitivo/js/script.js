

var swiper = new Swiper(".mySwiper", {
  slidesPerView: 4,
  spaceBetween: 30,
  freeMode: true,
  // autoplay: {
  //   enable: true,
  //   delay: 2000
  // },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

var swiper2 = new Swiper(".mySwiper2", {
  slidesPerView: 4,
  spaceBetween: 30,
  freeMode: true,
  // autoplay: {
  //   enable: true,
  //   delay: 2500
  // },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

var swiper3 = new Swiper(".mySwiper3", {
  slidesPerView: 4,
  spaceBetween: 30,
  freeMode: true,
  // autoplay: {
  //   enable: true,
  //   delay: 3000
  // },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});


const URLProdotti = "https://dummyjson.com/products";

function ottieniDati() {
  
  fetch(URLProdotti)
  .then(res => res.json())
  .then(data => {
    popolaSwiper(data.products);
    console.log(data.products);
    
  })
  
}
ottieniDati();
    
    
    function popolaSwiper(products) {
      let swiperSlider1 = document.querySelector('.swiper1');
      let swiperSlider2 = document.querySelector('.swiper2');
      let swiperSlider3 = document.querySelector('.swiper3');
      
      let arrayProdotti = [];
      
      products.forEach(product => {
        arrayProdotti.push(product);
        
      });

      for (let i = 0; i < 10; i++) {
        
        let elementSwiper = `
        <div class="swiper-slide home" style="background-image: url(${arrayProdotti[i].images[0]});" data-id="${arrayProdotti[i].id}">
        <div class="caption">
        <h5>${arrayProdotti[i].title}</h5>
        <p>${arrayProdotti[i].description}</p>
        </div>
        </div>
        `;
        
        swiperSlider1.innerHTML += elementSwiper;
        inviaPaginaInfo();
      }
      
      for (let i = 10; i < 20; i++) {
        
        let elementSwiper = `
        <div class="swiper-slide home" style="background-image: url(${arrayProdotti[i].images[0]});" data-id="${arrayProdotti[i].id}">    
        <div class="caption">
        <h5>${arrayProdotti[i].title}</h5>
        <p>${arrayProdotti[i].description}</p>
        </div>
        </div>
        `;
        
        swiperSlider2.innerHTML += elementSwiper;
        inviaPaginaInfo();
      }
      
      for (let i = 20; i < 30; i++) {
        
        let elementSwiper = `
        <div class="swiper-slide home" style="background-image: url(${arrayProdotti[i].images[0]});" data-id="${arrayProdotti[i].id}">
        <div class="caption">
        <h5>${arrayProdotti[i].title}</h5>
        <p>${arrayProdotti[i].description}</p>
        </div>
        </div>
        `;
        
        swiperSlider3.innerHTML += elementSwiper;
        inviaPaginaInfo();
      }
      
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

    function inviaPaginaInfo() {

      let info = document.querySelectorAll('.home');
      console.log(info);
      info.forEach(btn => {
          btn.addEventListener('click', function () {
              const id = btn.getAttribute('data-id');
              console.log(id);
              localStorage.setItem('info', JSON.stringify(id));
              window.location.href = 'http://127.0.0.1:5500/info-prodotti.html';
          });
      });
  }