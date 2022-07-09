let id;

const obtenerId = () => {
  id = 100;
};
const abonar = (id, abono)=>{
    console.log(`Al usuario ${id} se le abonaron $${abono}` )
}
setTimeout(obtenerId, 0);

let abono = 1000;
abonar(id, abono);