function menu() {
    
let saborPrincipal = prompt('Mustafa`s Kebab \n HELLO!! \n Please Choose You Flavours \n 1 Lamb - 2.000 \n 2 Chicken - 4.000 \n 3 Mix 6.000  ');
let lamb = 2000
let chicken = 4000
let mix = 6000
let a = 200
let b = 400
let c = 600
let total = 0
var saboresExtras = undefined

if (saborPrincipal == 1) {
    alert('De Acuerdo A Su Decision LAMB Se le Agregara un monto de \n 2.000');
    total += lamb
    console.log(total)
    while (saboresExtras != "PG") {
        saboresExtras = prompt(' Please Choose You Ingredients If You R Ready For Send Your Order Write "PG" \n A - Yellow Rice  \n B - Chicken \n C - CusCus  ');
        if (saboresExtras == "A") {
            total += a
        }
        else if (saboresExtras == "B") {
            total += b
        }
        else if (saboresExtras == "C") {
            total += c
        }
        else if (saboresExtras != "A" || saboresExtras != "B" || saboresExtras != "C" || saboresExtras != "PG") {
            alert('Tienes Que Especificar tu sabor con las opciones A , B o C . Respectivamente en Mayusculas');
        }
    }
    alert("Su TOTAL A PAGAR ES " + total)
}

else if (saborPrincipal == 2) {
    alert('De Acuerdo A Su Decision CHICKEN Se le Agregara un monto de \n 4.000');
    total += chicken
    console.log(total)
    while (saboresExtras === "PG") {
        saboresExtras = prompt(' Please Choose You Ingredients If You R Ready For Send Your Order Write "PG"  \n A - Yellow Rice  \n B - Chicken \n C - CusCus  ');
        if (saboresExtras == "A") {
            total += a
        }
        else if (saboresExtras == "B") {
            total += b
        }
        else if (saboresExtras == "C") {
            total += c
        }
        else if (saboresExtras != "A" || saboresExtras != "B" || saboresExtras != "C" || saboresExtras != "PG") {
            alert('Tienes Que Especificar tu sabor con las opciones A , B o C . Respectivamente en Mayusculas');
        }
    }
    alert("Su TOTAL A PAGAR ES " + total)
}

else if (saborPrincipal == 3) {
    alert('De Acuerdo A Su Decision MIX Se le Agregara un monto de \n 6.000');
    total += mix
    console.log(total)
    while (saboresExtras === "PG") {
        saboresExtras = prompt(' Please Choose You Ingredients If You R Ready For Send Your Order Write "PG" \n A - Yellow Rice  \n B - Chicken \n C - CusCus  ');
        if (saboresExtras == "A") {
            total += a
        }
        else if (saboresExtras == "B") {
            total += b
        }
        else if (saboresExtras == "C") {
            total += c
        }
        else if (saboresExtras != "A" || saboresExtras != "B" || saboresExtras != "C" || saboresExtras != "PG") {
            alert('Tienes Que Especificar tu sabor con las opciones A , B o C . Respectivamente en Mayusculas');
        }
    }
    alert("Su TOTAL A PAGAR ES " + total)
}
else {

}


}