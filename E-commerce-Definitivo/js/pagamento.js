
let chiudi = document.querySelector('.close');
let paga = document.querySelector('.paga');
let modal = document.querySelector('.modal');
let richiesti = document.querySelectorAll('.richiesti');

console.log(richiesti);
function pagato() {
    
    // richiesti.forEach(element => {
    //     if (element.value != '') {
    //         console.log(element.value);
    //         modal.classList.add('d-block');
    //     }
    // });


}

function chiusura() {
    
    modal.classList.remove('d-block');
    window.location.href = 'http://127.0.0.1:5500/index.html';
}

paga.addEventListener('click', pagato);

chiudi.addEventListener('click', chiusura);



// Example starter JavaScript for disabling form submissions if there are invalid fields
(() => {
    'use strict'
  
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    const forms = document.querySelectorAll('.needs-validation')
  
    // Loop over them and prevent submission
    Array.from(forms).forEach(form => {
      form.addEventListener('submit', event => {
        if (!form.checkValidity()) {
          event.preventDefault()
          event.stopPropagation()
        }
  
        form.classList.add('was-validated')
      }, false)
    })
  })()