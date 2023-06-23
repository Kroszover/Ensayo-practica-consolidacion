class Empleado {
  constructor(
    idEmpleado,
    apellido,
    nombre,
    titulo,
    tituloDeCortesia,
    fechaNacimiento,
    fechaContratacion
  ) {
    this._idEmpleado = idEmpleado;
    this._apellido = apellido;
    this._nombre = nombre;
    this._titulo = titulo;
    this._tituloDeCortesia = tituloDeCortesia;
    this._fechaNacimiento = fechaNacimiento;
    this._fechaContratacion = fechaContratacion;
  }

  get idEmpleado() {
    return this._idEmpleado;
  }

  set idEmpleado(idEmpleado) {
    this._idEmpleado = idEmpleado;
  }

  get apellido() {
    return this._apellido;
  }

  set apellido(apellido) {
    this._apellido = apellido;
  }

  get nombre() {
    return this._nombre;
  }

  set nombre(nombre) {
    this._nombre = nombre;
  }

  get titulo() {
    return this._titulo;
  }

  set titulo(titulo) {
    this._titulo = titulo;
  }

  get tituloDeCortesia() {
    return this._tituloDeCortesia;
  }

  set tituloDeCortesia(tituloDeCortesia) {
    this._tituloDeCortesia = tituloDeCortesia;
  }

  get fechaNacimiento() {
    return this._fechaNacimiento;
  }

  set fechaNacimiento(fechaNacimiento) {
    this._fechaNacimiento = fechaNacimiento;
  }

  get fechaContratacion() {
    return this._fechaContratacion;
  }

  set fechaContratacion(fechaContratacion) {
    this._fechaContratacion = fechaContratacion;
  }
}
