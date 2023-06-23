class Producto {
  constructor(
    productoId,
    productoNombre,
    precioUnitario,
    unidadesEnStock,
    descontinuado
  ) {
    this._productoId = productoId;
    this._productoNombre = productoNombre;
    this._precioUnitario = precioUnitario;
    this._unidadesEnStock = unidadesEnStock;
    this._descontinuado = descontinuado;
  }

  get productoId() {
    return this._productoId;
  }

  set productoId(productoId) {
    this._productoId = productoId;
  }

  get productoNombre() {
    return this._productoNombre;
  }

  set productoNombre(productoNombre) {
    this._productoNombre = productoNombre;
  }

  get precioUnitario() {
    return this._precioUnitario;
  }

  get unidadesEnStock() {
    return this._unidadesEnStock;
  }

  set unidadesEnStock(unidadesEnStock) {
    this._unidadesEnStock = unidadesEnStock;
  }

  get descontinuado() {
    return this._descontinuado;
  }

  set descontinuado(descontinuado) {
    this._descontinuado = descontinuado;
  }
}

module.exports = Producto;
