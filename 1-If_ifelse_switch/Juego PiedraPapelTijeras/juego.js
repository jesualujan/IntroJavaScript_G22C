/** Crearemos el juego de Piedra papel y tijeras */

let respuestaUsuario = prompt("¿Piedra, papel o tijeras?").toLowerCase();

// Math.random devuelve un valor aleatorio entre 0 y 1
let respuestaComputadoraNumero = Math.floor(Math.random() * 3);
let respuestaComputadora; // Va a representar/guardar la cadena

// Comparamos 0 , 1, 2, 3
if( respuestaComputadoraNumero === 0){
    respuestaComputadora = "piedra";
}
else if( respuestaComputadoraNumero === 1){
    respuestaComputadora = "papel";
}
else {
    respuestaComputadora = "tijeras";
}

// Quiero comparar respuestaComputadora con respuestaUsuario
if(respuestaComputadora == respuestaUsuario)
{// Empate
    console.log("Super Empate!!!")
    alert("Super Empate!!!")
    document.write("Super Empate!!!")
}

// Compara cuando eleji piedra
else if( respuestaUsuario == "piedra" && respuestaComputadora =="papel"){
    console.log("Gana la Computadora!!!")
    alert("Gana la Computadora!!!")
    document.write("Gana la Computadora!!!")
}else if( respuestaUsuario == "piedra" && respuestaComputadora =="tijeras"){
    console.log("Ganaste!!!")
    alert("Ganaste!!!")
    document.write("Ganaste!!!")
}

// Compara cuando eleji papel
else if( respuestaUsuario == "papel" && respuestaComputadora =="piedra"){
    console.log("Ganaste!!!")
    alert("Ganaste!!!")
    document.write("Ganaste!!!")
}else if( respuestaUsuario == "papel" && respuestaComputadora =="tijeras"){
    console.log("Gana la Computadora!!!")
    alert("Gana la Computadora!!!")
    document.write("Gana la Computadora!!!")
}

// Compara cuando eleji tijeras
else if( respuestaUsuario == "tijeras" && respuestaComputadora =="papel"){
    console.log("Ganaste!!!")
    alert("Ganaste!!!")
    document.write("Ganaste!!!")
}else if( respuestaUsuario == "tijeras" && respuestaComputadora =="piedra"){
    console.log("Gana la Computadora!!!")
    alert("Gana la Computadora!!!")
    document.write("Gana la Computadora!!!")
}