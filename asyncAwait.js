let cadena = 324;

const palindromo = new Promise((resolver, reject) => {
  setTimeout(() => {
    if (!cadena) {
      reject("No existe la cadena.");
    } else if (typeof cadena !== "string") {
      reject("El elemento no es de tipo String.");
    } else if (cadena.length < 3) {
      reject("El tamaño de laa cadena es menor o igual a 2.");
    } else if (cadena === cadena.split("").reverse().join("")) {
      resolver("Es Palindromo");
    } else {
      resolver("No es Palindromo");
    }
  }, 1000);
});

const asincrono = async () => {
  try {
    const resp = await palindromo;
    console.log(resp);
  } catch (e) {
    console.log("ERROR DE LA PROMESA:", e);
  }
};

asincrono();
