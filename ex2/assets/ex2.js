
const resultadoSumatoria = document.querySelector("#result1");
const avisoNumeroIngresado = document.querySelector("#aviso1");

function sumarNumeros() {
    let numeroIngresado = parseInt(document.querySelector("#barraParaNumero").value);

    resultadoSumatoria.innerHTML = '';

    if (isNaN(numeroIngresado)) {
        disparaAlerta("RECUERDA QUE PARA QUE ESTO FUNCIONE TIENES QUE INGRESAR UN NUMERO", "warning", "#ff5618", "#fff")
    }
    else if ((numeroIngresado % 2) != 0) {
        disparaAlerta((numeroIngresado + ' es impar'), "successful", "#ff5618", "#fff")
    }
    else if ((numeroIngresado % 2) == 0) {
        disparaAlerta((numeroIngresado + ' es par'), "successful", "#ff5618", "#fff")
    }
}

function disparaAlerta(mensajeDeLaAlerta, icono, colorIcono, colorTexto) {
    Swal.fire({
        icon: icono,
        title: mensajeDeLaAlerta,
        iconColor: colorIcono,
        color: colorTexto,
        width: 600,
        padding: '3em',
        background: '#fff url(https://64.media.tumblr.com/8aacd33583f3b72bef412f3c3f9ea0bf/tumblr_pyularmHoi1w3y4ilo1_640.gifv)',
    })
}