import Cliente from './cliente.js';
import Impuestos from './Impuestos.js';

let impuestos1 = new Impuestos(950000, 10000);
let cliente1 = new Cliente('Juan Zapata', impuestos1);

console.log(cliente1.calcularImpuesto());