let matricula = parseInt(1000000)

const resultadoSumatoria = document.querySelector("#result1");


if (localStorage.getItem("nota1") == null) {
  localStorage.setItem("nota1", cantidadNotasActuales)
} else {
  cantidadNotasActuales = localStorage.getItem("cantidad")
  cantidadNotasActuales = parseInt(cantidadNotasActuales) + 1
  localStorage.setItem("cantidad", cantidadNotasActuales)
}