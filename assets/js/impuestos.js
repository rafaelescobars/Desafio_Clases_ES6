export default class Impuestos {
  constructor(montoBrutoAnual = 0, deducciones = 0) {
    this._montoBrutoAnual = montoBrutoAnual;
    this._deducciones = deducciones
  }

  get montoBrutoAnual() {
    return this._montoBrutoAnual;
  }
  get deducciones() {
    return this._deducciones;
  }

  set montoBrutoAnual(nuevo_montoBrutoAnual) {
    this._montoBrutoAnual = nuevo_montoBrutoAnual;
  }
  set deducciones(nueva_deducciones) {
    this._deducciones = nueva_deducciones;
  }
}