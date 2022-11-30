

let numero = 0;
while (numero < 11)
{
    console.log(numero)
    // numero = numero + 1;
    // numero ++;
    numero += 1;
}

let tengoSaludMental = true;

while(tengoSaludMental){
    console.log("Sigo mi dieta")
    // if (prompt("¿Todavía aguanto sin comer garnachas, hamburguesas y taquitos?") != "si"){
    //     tengoSaludMental = false;
    // }
    if(!confirm("¿Todavía aguanto sin comer garnachas, hamburguesas y taquitos?")){
        tengoSaludMental = false
    }
}
alert("¡Rompi mi dieta!");


// let pasoPorUnaTienda = true
// if(pasoPorUnaTienda){
//     console.log("Compro una aguita")
// }

// let tengoDinero = false;
// if(tengoDinero){
//     console.log("Puedo comer este mes")
// }else{
//     console.log("No como este mes")
// }

/** Emprendimiento */

let dinero = 100;

do{
    console.log("Pruebo una nueva idea. Gasto 100. ")
    dinero -= 100
    console.log("Intentar vender la idea")
    // parseInt transformar a numeros enteros: 1,50,700,43
    // parseFloat transforma a numeros reales: 1.1, 900.50, 1050.20
    let resultadoVenta = parseFloat(prompt("¿Cuánto gané o perdí?"));
    dinero = dinero + resultadoVenta;
    console.log("Dinero Final: "+ dinero)
}while(dinero > 0); // Si quede en tablas o en numero rojos (endeudados) ya no lo intento

console.log("Ya no puedo emprender. Estoy endeudadisimo!")

// Inicio 100
// Pruebo y quedo con 0 pesos
// Gane 200. Entonces quedo con 200
// Pruebo y quedo con 100
// Perdí 150. Entonces quedo con deuda de 50 (-50)
// Ya no emprendo mas

// 100
// Perdi 50 (-50)
// dinero = 100 + (-50)
// dinero = 100 - 50
// dinero = 50

// Probar con <input>

// Extra!!!
// Estructuras de datos
// Cuando utilizamos estructuras de datos puede ser importante
// elegir el ciclo a utilizar

// Funcion ordenar
// let conjunto = [2,3,4,100,5,6,7,8,9,10]
// do{
//     // Ordenar el numerito actual

//     // Ya esta arreglado?
// }while(estaArreglado(conjunto));

// Ejemplo con programas
// Inicializa variables e instrucciones iniciales
// do{
//     // Procesar instrucciones 
//     // Agregar instrucciones si el usuario las define

//     // Revisa si hay mas instrucciones por procesar
// }while(hayMasInstrucciones);

// Ejemplo con contraseña
// do{
//     //Preguntamos contraseña
// }while(contraseña != contraseñaGuardada);

for(var i = 0; i < 10; i++){
    console.log("Contando... " + i);
}


let miDinero = 10;
for(var i = 0; i < 10; i++){
    console.log("Mi inversion inicial es: "+ miDinero);
    miDinero = miDinero*miDinero;
    console.log("Mi inversion final es: "+ miDinero);
}

let tareas = [
    "Limpiar", // 0
    "Bañarme", // 1
    "Comer", // 2
    "Estudiar", // 3
    "Trabajar", // 4
    "Divertirme!" // 5
]

for(var i = 0; i < tareas.length ;i++){
    console.log("¿Que realizo?: " + tareas[i])
}

let datosAleatorios = [
    "Saul",
    153,
    ["Una", "Lista"],
    6.5,
    new Date()
]

//  Inicializacion    // Condicion                // Manipulacion
for(var i = 0;         i < datosAleatorios.length      ;i++){
    console.log("Mi Dato: " + datosAleatorios[i])
}

// QueTanLLeno    // Mientras no se llene    // MeterMetal
for(var i = 0; i< datosAleatorios.length;    i++){

    // Buscar Metal
    console.log("Mi Dato 2: " + datosAleatorios[i])

    // Paso a Meter Metal y repetir
}

