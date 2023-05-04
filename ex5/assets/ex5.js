function mostrarTabla() {

    const numero = parseInt(document.querySelector("#numero").value);
    
    let tablaHtml = "<table>";
    let total = 0;
    for (let i = 1; i <= 10; i++) {
      const resultado = numero * i;
      tablaHtml += "<tr><td>" + numero + " x " + i + "</td><td>=</td><td>" + resultado + "</td></tr>";
      total += resultado;
    }
    tablaHtml += "</table>";
    
    document.querySelector("#tabla").innerHTML = tablaHtml;
    document.querySelector("#total").innerHTML = "El total de las multiplicaciones es: " + total;
}

