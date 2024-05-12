
let richiesti = document.querySelectorAll('.richiesti');
let modal = document.querySelector('.modal');
let chiudi = document.querySelector('.close');
let paga = document.querySelector('.paga');
const form = document.querySelector('.needs-validation');
const forms = document.querySelectorAll('.needs-validation');


console.log(richiesti);
function pagato() {
  console.log('Funzione pagato chiamata');
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

// Aggiungi gestore di eventi click al pulsante "Paga"
paga.addEventListener('click', function (event) {
  event.preventDefault(); // Previeni l'invio predefinito del form

  // Esegui la validazione del form
  if (form.checkValidity()) {
    // Se il form è valido, mostra il modal
    modal.classList.add('d-block');
    pagato();
  } else {
    // Se il form non è valido, mostra gli errori di validazione
    form.classList.add('was-validated');
  }
});
