var swiper = new Swiper(".mySwiper", {
  slidesPerView: 4,
  spaceBetween: 30,
  freeMode: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

var swiper2 = new Swiper(".mySwiper2", {
  slidesPerView: 4,
  spaceBetween: 30,
  freeMode: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

var swiper3 = new Swiper(".mySwiper3", {
  slidesPerView: 4,
  spaceBetween: 30,
  freeMode: true,
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
      console.log(arrayProdotti);
      for (let i = 0; i < 10; i++) {
        
        let elementSwiper = `
        <div class="swiper-slide" style="background-image: url(${arrayProdotti[i].images[0]});">
        <div class="caption">
        <h5>${arrayProdotti[i].title}</h5>
        <p>${arrayProdotti[i].description}</p>
        </div>
        </div>
        `;

        swiperSlider1.innerHTML += elementSwiper;
        
      }

      for (let i = 10; i < 20; i++) {
        
        let elementSwiper = `
        <div class="swiper-slide" style="background-image: url(${arrayProdotti[i].images[0]});">    
        <div class="caption">
        <h5>${arrayProdotti[i].title}</h5>
        <p>${arrayProdotti[i].description}</p>
        </div>
        </div>
        `;

        swiperSlider2.innerHTML += elementSwiper;
        
      }
        
      for (let i = 20; i < 30; i++) {
        
        let elementSwiper = `
        <div class="swiper-slide" style="background-image: url(${arrayProdotti[i].images[0]});">
        <div class="caption">
        <h5>${arrayProdotti[i].title}</h5>
        <p>${arrayProdotti[i].description}</p>
        </div>
        </div>
        `;

        swiperSlider3.innerHTML += elementSwiper;
        
      }

  }

popolaSwiper();