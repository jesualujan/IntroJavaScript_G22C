/** Operadores de comparación:
 *  nos devuelven un valor verdadero o falso
 */
7 < 13

57 > 12

343 <= 343

50 <= 343

344 <= 343

8 >= 8

8 >= 9

'3.1416' == 3.1416

'3.1416' === 3.1416

'77' != 77

'77' != 78

/**
 * Uso del if
 */

let x = 5;

if (x < 10){
    console.log("El valor " + x + " es menor a 10");
}

if (x % 5 == 0){
    console.log("El valor " + x + " es divisible entre 5");
}

/**
 * Uso del if-else
 */

let color = "azul"

if (color === "azul"){
    console.log("El color es azul")
    alert("El color es azul")
}else{
    console.log("El color NO es azul. Es "+ color)
    alert("El color NO es azul. Es "+ color)
}

color = "rosa pastel"

if (color === "azul"){
    console.log("El color es azul")
    alert("El color es azul")
}else{
    console.log("El color NO es azul. Es "+ color)
    alert("El color NO es azul. Es "+ color)
}

/**
 * Extra!!! 
 * Switch: es una forma de simplificar los if cuando sabemos
 * exactamente los valores que compararemos. Y estos valores
 * los dividimos en casos o 'case'
 */

// Pedimos un número, pero como case utiliza === para comparar
// es necesario que convirtamos la cadena a un número. Esto lo
// logramos con 'parseInt' que quiere decir 'convierte a entero'
// Así nos aseguramos que lo que llegue a switch sea del mismo
// tipo de dato que tiene los 'case' que en este caso es un 
// entero.
let numero = parseInt(prompt("Dame un número del 0 al 5"))

// Le tenemos que dar una VARIABLE en lugar de una condición
// pues SWITCH se encarga de hacer las comparaciones de tipo
// igual, es decir, compara con === el valor a la derecha de
// la palabra case
switch(numero){
    case 0:
        console.log("Hola!")
        alert("Hola!")
        // BREAK es importante porque si no se rompe switch, ejecutará TODOS los casos
        break; 
    case 1:
        console.log("Soy el caso 1. Mucho gusto")
        alert("Soy el caso 1. Mucho gusto")
        break;
    case 2:
        console.log("Dejeme dormir porfavor T.T")
        alert("Dejeme dormir porfavor T.T")
        break;
    case 3:
        console.log("...")
        alert("...")
        break;
    case 4:
        console.log("Ya vamonos!!!")
        alert("Ya vamonos!!!")
        break;
    case 5:
        console.log("Adios u.u")
        alert("Adios u.u")
        break;
    default:
        console.log("Te dije que entre 0 y 5 -.- Ay deveras contigo")
        alert("Te dije que entre 0 y 5 -.- Ay deveras contigo")
        break;
}

// Podemos utilizar diferentes tipos de dato en case!!! Por ejemplo
// cadenas o 'string'
var nombre = prompt("¿Cual es tu nombre?")
switch(nombre){
    case "Jesua":
        console.log("Hola sensei Jesua!")
        alert("Hola sensei Jesua!")
        break;
    case "Alejandro":
        console.log("Sigue practicando Alejandro! También lee mucho n.n")
        alert("Sigue practicando Alejandro! También lee mucho n.n")
        break;
    case "Viridiana":
        console.log("Sigue jugando para aprender Viri!")
        alert("Sigue jugando para aprender Viri!")
        break;
    case "Sergio":
        console.log("Que bonito que vas adelantando a los temas para entender mejor")
        alert("Que bonito que vas adelantando a los temas para entender mejor")
        break;
}