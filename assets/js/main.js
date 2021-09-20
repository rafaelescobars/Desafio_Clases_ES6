import Cliente from './cliente.js';
import Impuestos from './Impuestos.js';

let impuestos1 = new Impuestos(950000, 10000);
let cliente1 = new Cliente('Juan Zapata', impuestos1);

console.log(cliente1.calcularImpuesto());
impuestos1.monto_bruto_anual = 100;
impuestos1.deducciones = 50;
cliente1.nombre = 'Antonio Rios';
console.log(impuestos1.monto_bruto_anual);
console.log(impuestos1.deducciones);
console.log(cliente1.nombre);
console.log(cliente1.calcularImpuesto());