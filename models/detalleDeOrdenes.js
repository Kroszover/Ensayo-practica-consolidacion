class DetalleDeOrden {
  constructor(idOrden, idProducto, precioUnitario, cantidad, descuento) {
    this._idOrden = idOrden;
    this._idProducto = idProducto;
    this._precioUnitario = precioUnitario;
    this._cantidad = cantidad;
    this._descuento = descuento;
  }

  get idOrden() {
    return this._idOrden;
  }

  set idOrden(idOrden) {
    this._idOrden = idOrden;
  }

  get idProducto() {
    return this._idProducto;
  }

  set idProducto(idProducto) {
    this._idProducto = idProducto;
  }

  get precioUnitario() {
    return this._precioUnitario;
  }

  set precioUnitario(precioUnitario) {
    this._precioUnitario = precioUnitario;
  }

  get cantidad() {
    return this._cantidad;
  }

  set cantidad(cantidad) {
    this._cantidad = cantidad;
  }

  get descuento() {
    return this._descuento;
  }

  set descuento(descuento) {
    this._descuento = descuento;
  }
}

module.exports = DetalleDeOrden;
