import Cliente from './cliente.js';
import Impuestos from './Impuestos.js';

let impuestos1 = new Impuestos(950000, 10000);
let cliente1 = new Cliente('Juan Pérez', impuestos1);

console.log(cliente1.calcularImpuesto());
impuestos1.montoBrutoAnual = 100;
impuestos1.deducciones = 50;
cliente1.nombre = 'Leon Scott Kennedy';
console.log(impuestos1.montoBrutoAnual);
console.log(impuestos1.deducciones);
console.log(cliente1.nombre);
console.log(cliente1.calcularImpuesto());