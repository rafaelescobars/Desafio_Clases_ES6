"use strict";

var _cliente = _interopRequireDefault(require("./cliente.js"));

var _Impuestos = _interopRequireDefault(require("./Impuestos.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var impuestos1 = new _Impuestos["default"](950000, 10000);
var cliente1 = new _cliente["default"]('Juan Pérez', impuestos1);
console.log(cliente1.calcularImpuesto());
impuestos1.montoBrutoAnual = 100;
impuestos1.deducciones = 50;
cliente1.nombre = 'Leon Scott Kennedy';
console.log(impuestos1.montoBrutoAnual);
console.log(impuestos1.deducciones);
console.log(cliente1.nombre);
console.log(cliente1.calcularImpuesto());