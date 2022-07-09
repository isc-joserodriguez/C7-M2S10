const h1Element = document.getElementById("titulo");
const inputElement = document.getElementsByClassName("campo")[0];

let titulo = "Hola";
h1Element.textContent = titulo;
inputElement.value = titulo;

let pausa;

inputElement.addEventListener("keyup", function (event) {
  clearTimeout(pausa);
  pausa = setTimeout(() => {
    console.log('Función ultra pesada que consume muchos recursos')
    let inputValor = event.target.value;
    if (inputValor == "") {
      h1Element.textContent = "Vacío";
    } else {
      h1Element.textContent = inputValor;
    }
  }, 500);
});
