const h1Element = document.getElementById("titulo");
const inputElement = document.getElementsByClassName("campo")[0];

let titulo = "Hola";
h1Element.textContent = titulo;
inputElement.value = titulo;

inputElement.addEventListener("keyup", function (event) {
  let inputValor = event.target.value;
  if ((inputValor == "")) {
    h1Element.textContent = "Vacío";
  } else {
    h1Element.textContent = inputValor;
  }
});
