let id;

const obtenerId = () => {
  id = 100;
};
const abonar = (id, abono) => {
  console.log(`Al usuario ${id} se le abonaron $${abono}`);
};

setTimeout(obtenerId, 0); //! Representa una petición para actualizar el ID del usuario

let abono = 1000;
abonar(id, abono); //! Se intenta hacer el abono al usuario
