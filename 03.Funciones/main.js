//* COCINANDO FUNCIONES 

//* HACER UNA FUNCIÓN QUE RECIBA COMO PARAMETRO DOS NUMEROS Y
//* TE DE EL RESUTALDO DE LA SUMA DE AMBOS 
    

// function sumaNumeros (x,y) {
//     let suma = x + y
//     console.log(`La suma es: ${suma}`)
//   }
//   sumaNumeros(1,5)

//* HACER UNA FUNCION QUE RECIBA COMO PARAMETRO UN NUMERO
//* Y TE DE COMO RESULTADO LA TABLA DE MULTIPLICAR DEL 2

//  function multipliciar (x) {
//     //CONTADOR
//     for(let i=2; i<10; i++){
//         console.log( " 2 x " + i + " : " + i*x)
//     }                 // 2 x 2: , 2 x 3: , 2 x 4:
//  }
//     multipliciar(2)

//* HACER UNA FUNCION QUE PIDA A UN USUARIO SU EDAD
//* Y SABER SI ES MAYOR O MENOR DE EDAD

//  function mayorEdad (edad) {    
//     var edad = window.prompt("¿CUANTOS AÑOS TIENES?")
//             //USAMOS ESTRUCTURAS DE CONTROL IF/ELSE
//             if(edad < 18) {
//                 console.log("eres menor de edad")
//             }else if (edad >= 18 ){
//                 console.log("eres mayor de edad")
//             }else {
//                 console.log("edad no valida 🤯")
//             }
//  }
//     mayorEdad()

//* HACER UNA FUNCION QUE PIDA A UN USUARIO SU NOMBRE, APELIDO Y EDAD
//* IMPRIMIR SUS DATOS EN UNA TABLA

function persona(nombre,apellido,edad){
        var nombre = window.prompt ("¿COMO TE LLAMAS?")
        var apellido = window.prompt ("¿COMO TE APELLIDAS?")
        var edad = window.prompt ("¿CUAL ES TU EDAD?")
        console.table([
            nombre, apellido, edad
        ])
}
    persona()