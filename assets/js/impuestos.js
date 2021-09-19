export default class Impuestos {
  constructor(monto_bruto_anual = 0, deducciones = 0) {
    this._monto_bruto_anual = monto_bruto_anual;
    this._deducciones = deducciones
  }

  get monto_bruto_anual() {
    return this._monto_bruto_anual;
  }
  get deducciones() {
    this._deducciones;
  }

  set monto_bruto_anual(nuevo_monto_bruto_anual) {
    this._monto_bruto_anual = nuevo_monto_bruto_anual;
  }
  set deducciones(nueva_deducciones) {
    this._deducciones = nueva_deducciones;
  }
}