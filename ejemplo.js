const imprimeArrayBAD = (array, n) => {
  array.forEach((el) => {
    setTimeout(() => console.log(el), n);
  });
};

let contador = 0;
const imprimeArray = (array, n) => {
  const intervalo = setInterval(() => {
    console.log(array[contador]);
    contador++;
    if (contador >= array.length) {
      contador = 0;
    }
  }, n);
};
imprimeArray([1, 2, 3, 4, 5], 1000)

setTimeout(()=>console.log('HOLA'),6000)

console.log('klasjdfld')