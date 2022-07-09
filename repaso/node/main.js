const moment = require("moment");
const obj = require("./app");

console.log(moment().format());

obj.saluda('nombre');
obj.saluda(obj.nombre);
