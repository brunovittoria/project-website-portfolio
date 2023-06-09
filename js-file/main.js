// JS ANIMATION BTN CARD

document.querySelector(".card-btn").addEventListener("click", () => {
    document.querySelector(".container").classList.toggle("change");
  });
  
// Funçao do botao pra CONTATO 

function enviarEmail() {
  window.open("mailto:brunogun1999@gmail.com", "_blank"); 
}