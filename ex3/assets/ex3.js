function pizzeRia() {
    var edadUser = prompt('Indique su Edad: ');
    var generoUser = prompt('Indique su Genero Con La Primera Letra En Mayusculas y Sin Espacios ( Mujer , Hombre ): ')


    if (edadUser <= 10 && edadUser != "" && edadUser >= 1) {
        if (generoUser == "Hombre") {
            alert('En Hora Buena Debes ir a reclamar un Jugo y una Pizza de 3 Carnes');
        }
        else if (generoUser == "Mujer") {
            alert('En Hora Buena Debes ir a reclamar un Jugo y una Pizza Hawaina');
        }
        else {
            alert('Tienes Que Especificar tu Genero Con La Primera Letra En Mayuscula');
        }
    }

    else if (edadUser >= 18 && edadUser != "") {
        if (generoUser == "Hombre") {
            alert('En Hora Buena Debes debe ir a reclamar una cerveza y una pizza de 3 carnes');
        }
        else if (generoUser == "Mujer") {
            alert('En Hora Buena Debes debe ir a reclamar una cerveza y una pizza hawaina');
        }
        else {
            alert('Tienes Que Especificar tu Genero Con La Primera Letra En Mayuscula');
        }
    }

    else if (edadUser >= 11 && edadUser <= 17) {
        alert('Mira bro lastimosamente por tu edad no tienes Ningun beneficio :C');
    }

    else if (edadUser = 0 || edadUser == '') {
        alert('Oh no Te has olvidado De tu Edad?');
    }
}








