// Obtenemos los datos de una base de datos
let ingredientes = [
    [1, "kg", "Espageti"],
    [4, "L", "Agua"],
    "500 ml CremaAcida".split(" "),// 500 sera una cadena, pero no afecta el proposito que es mostrarlo
    [300, "gr", "Queso Panela"],
    [2, "Cucharadas", "Mantequilla"], // 3-2 - Quiero que cuando sea 1, imprima de
    [2, "Cucharadas", "Aceite"], // 3-2
    ["Al gusto", "Sal"], //2
    ["Al gusto", "Pimienta"] // 2-2 - Quiero que cuando sea 0, imprima de
]

document.write("<h1>Receta</h1>")
for(var i = 0; i < ingredientes.length; i++){
    // document.write(`
    // <section>
    //     <p>${ingredientes[i][2]}: ${ingredientes[i][0]} ${ingredientes[i][1]}</p>
    // </section>
    // `)
    document.write(`<section><p>`)
    for(var j = 0; j< ingredientes[i].length; j++){
        document.write(`${ingredientes[i][j]} `)
        if (ingredientes[i].length-2 == j){
            document.write(" de ")
        }
    }
    document.write(`</p></section>`)
}

// Ejercicios
// 
/**
 * Terminar de escribir los ciclos para terminar de imprimir
 * la receta.
 * Pasos para cocinar la receta https://www.cocinavital.mx/recetas/pasta/espagueti-blanco-principiantes/2018/06/
 * 
 * BONUS: Imprime la receta con estilos CSS o Bootstrap
 */

/**
 * Transacciones de dinero
 * Crear un ciclo para simular compras, donde tendran dos variables
 * y deberan decidir si pagan con efectivo o tarjeta, pero antes de
 * pagar verifique si todavía tiene dinero en efectivo o tarjeta
 * para pagar.
 * 
 * BONUS: Agregar opcion para pagar una parte con tarjeta y una parte
 * con efectivo
 */

