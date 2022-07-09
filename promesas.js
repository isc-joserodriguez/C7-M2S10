let id;

const obtenerId = () => {
  id = 10;
};
const abonar = (id, abono) => {
  console.log(`Al usuario ${id} se le abonaron $${abono}`);
};

const promesaEjemplo = new Promise((resolver, reject) => {
  setTimeout(() => {
    obtenerId();
    if (!id) {
      reject();
    }
    resolver("Listo");
  }, 3000);
});

promesaEjemplo
  .then((mensaje) => {
    console.log(mensaje);
    abonar(id, 1000);
  })
  .catch(() => {
    console.log("Error");
  })
  .finally(() => {
    console.log("FINALLY...");
  });
