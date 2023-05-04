
const resultadoSumatoria = document.querySelector("#result1");
const avisoNumeroIngresado = document.querySelector("#aviso1");

    function sumarNumeros() {
        let numeroIngresado = parseInt(document.querySelector("#barraParaNumero").value);
        let suma = 0;
    
        resultadoSumatoria.innerHTML = '';
    
        for (let i = 1; i <= numeroIngresado; i++) {
        suma += i;
        }

        if (isNaN(numeroIngresado)) {
            disparaAlerta("RECUERDA QUE PARA QUE ESTO FUNCIONE TIENES QUE INGRESAR UN NUMERO", "warning", "#ff5618", "#fff")
            } else {
                resultadoSumatoria.innerHTML += `
                <div class="col">
                    <div class="card">
                    <img src="https://64.media.tumblr.com/93627c79bdcab1fa177cc26a8c4f3f54/8f97a50be9f4aefe-2c/s540x810/2af9b5602377fc6657bafd6eab18ee01d715b883.gifv" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">
                        Procederemos a sumar números hasta llegar a ${numeroIngresado}
                        </h5>
                        <p class="card-text">
                        El resultado de esta sumatoria de acuerdo al número ingresado es ${suma}
                        </p>
                    </div>
                    </div>
                </div>
                `;
            }
    }





    
            function mostrarNumeroIngresado() {
                const inputNumero = document.querySelector("#barraParaNumero");
                const numeroIngresado = inputNumero.value;

                if (numeroIngresado == '') {
                disparaAlerta("RECUERDA QUE PARA QUE ESTO FUNCIONE TIENES QUE INGRESAR UN NUMERO", "warning", "#ff5618", "#fff")
                inputNumero.classList.add("border", "border-danger");
                } else {
                inputNumero.classList.remove("border", "border-danger");
                avisoNumeroIngresado.innerHTML += `
                    <div class="col mt-2">
                    <div class="card">
                        <div class="card-body">
                        <h5 class="card-title">
                            Su número ingresado ha sido ${numeroIngresado}
                        </h5>
                        </div>
                    </div>
                    </div>
                `;
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

        // let resultado = document.querySelector("#result1");
        
        // function sumarNumeros() {
        //     let n = document.querySelector("#barraParaNumero").value;
        //     let suma = 0;
        //     for (var i = 1; i <= parseInt(n); i++) {
        //         suma += i;
        //     }
        
        //     console.log(suma);
        
        
        //     resultado.innerHTML += `
        //     <div class="col">
        //     <div class="card">
        //     <div class="card-body">
        //     <h5 class="card-title">
        //     Procederemos a Sumar numeros hasta llegar a ${n.value}
        //     </h5>
        //     <p class="card-text">
        //     El resultado de esta sumatoria DE ACUERDO al numero ingresado
        //     es ${suma}
        //     </p>
        //     </div>
        //     </div>
        //     </div>
        //     `;
        // }
        
        // function mostrarNumeroIngresado() {
        //     let aviso1 = document.querySelector("#aviso1")
        //     n = document.querySelector("#barraParaNumero");
        //     aviso1.innerHTML += `
        //     <div class="col">
        //     <div class="card">
        //     <div class="card-body">
        //     <h5 class="card-title">Su Numero Ingresado Ha Sido ${n.value}</h5>
        //     </div>
        //     </div>
        //     </div>`
        // }
