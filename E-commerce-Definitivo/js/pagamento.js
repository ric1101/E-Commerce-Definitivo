
let chiudi = document.querySelector('.close');
let paga = document.querySelector('.paga');
let modal = document.querySelector('.modal');
let richiesti = document.querySelectorAll('.richiesti');

console.log(richiesti);
function pagato() {
    
    richiesti.forEach(element => {
        if (element.value == '') {
            console.log(element.value);
            modal.classList.add('d-none');
          } else {
            
            modal.classList.add('d-block');
        }
    });


}

function chiusura() {
    
    modal.classList.remove('d-block');
    window.location.href = 'index.html';
}



chiudi.addEventListener('click', chiusura);

const forms = document.querySelectorAll('.needs-validation')

Array.from(forms).forEach(form => {
        form.addEventListener('submit', event => {
          if (!form.checkValidity()) {
            event.preventDefault()
            event.stopPropagation()
          } else {
            paga.addEventListener('click', pagato);
          }
          form.classList.add('was-validated')
      }, false)
  })    

