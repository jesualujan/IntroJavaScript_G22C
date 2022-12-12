
//**********************************************************
//----------------------------------------------------------
// Estructura de control
//----------------------------------------------------------
//**********************************************************

//**********************************************************
// Los if nos van a servir para validar cuando están solos
//**********************************************************

/**
 * Calcula la raíz cuadrada y la muestra, valida si el número
 * es negativo para evitar números complejos.
 * Toma el número del campo HTML para hacer el cálculo
 */
// NOTA: Puedes llamar como quieras la funcion, pero se recomienda
// mantener un solo idioma y una sola forma en todo tu código
function raizSquared() {
    // Usamos parseInt o parseFloat para convertir números enteros o con punto decimal respectivamente
    let numero = parseInt(document.querySelector("#numero1").value)
    if( numero < 0 ){
        console.error("No puedo usar numeros imaginarios")
        return
    }
    console.log("Raiz: " + Math.sqrt(numero))
}

/**
 * Caso particular donde en sistemas más grandes es posible usar un if
 * validando los permisos de cada uno de los usuarios para realizar los
 * cambios adecuados en una base de datos
 * usuario - quien modifica
 * dato - que manipulo
 */
function agregarDato(usuario, dato){
    if(usuario[1] != "administrador"){
        console.error("No tienes permisos para realizar la acción")
        return
    }
    console.log("Dato " + dato + "agregado exitosamente")
    // Insertar en Postgress o en MySQL
}

//**********************************************************
//----------------------------------------------------------
// Las estructuras if-else
//----------------------------------------------------------
//**********************************************************

// Las condiciones if-else comunmente se ocupan para realizar un proceso
// alterno dentro de una línea de trabajo, como la creación de datos o al
// generar algún componente gráfico basado en los datos a mostrar

/** 
 * Crea una tarjeta para los empleados y la imprime en pantalla. Supon que
 * existe una Empresa Patito, cuyos empleados originales tenían un identificador
 * de 12 letras. Después de un tiempo cambió la razón de la empresa y la
 * forma en que identifican a sus empleados a un identificador de 14 letras.
 * Según si es empleado antiguo o reciente se imprime diferente su información
 * en pantalla.
 */
// Empresa Patito
// - EMPA20150010
// Empresa Super Patito
// - PATITO20220005
function construirTarjeta(identificador, nombre){
    let tarjeta = "<section>"
    if(identificador.length == 12){
        tarjeta += "<b>🚀Sr. "+nombre+" 🚀</b>"
    }else{
        tarjeta += "<b>Jr. "+nombre+" </b>"
    }
    tarjeta += "</section>"
    document.querySelector("body").innerHTML += tarjeta
    // document.querySelector("body").innerHTML = document.querySelector("body").innerHTML + tarjeta
}

// También utilizamos if-else con más estructuras if-else de forma continua
// para poder englobar muchos casos. Esto se ve principalmente en sistemas
// de información cuyas salidas dependen del tipo de usuario o otro dato como
// la edad

/**
 * Compara la edad y muestra acorde al rango cómo se considera en la sociedad
 * Parametros:
 * - edad: número que representa una edad en años
 */
function compararEdad(edad){
    if (edad < 0){
        console.log("Es un nonato")
    }else if(edad < 6){
        console.log("Primer Infante")
    }else if(edad < 13){
        console.log("Es un infante")
    }else if(edad < 19){
        console.log("Es un adolescente")
    }else if(edad < 27){
        console.log("Es un adulto joven")
    }else if( edad < 60){
        console.log("Es un adulto")
    }else{
        console.log("Es un adulto de la tercera edad")
    }
}


/**
 * También podemos comparar con ayuda de otras funciones si un elemento
 * está dentro de un arreglo.
 * Esta función compara si la letra está dentro de alguno de nuestros arreglos
 * e imprime si es una consonante o vocal. NO es la única solución, pues
 * podríamos utilizar ciclos para comparar cada vocal (vocales[i] == letra)
 * y cada consonante (consonantes[i] == letra), o incluso para los más aventados
 * usar Expresiones Regulares
 * Parámteros:
 * - letra: simbolo alfabético que se buscará en cada arreglo para determinar
 *      si es vocal, consonante o ninguna.
 */
function compararLetra(letra){
    let vocales = ['a','e','i','o','u']
    let consonantes = ['b','c','d','f','g','h','j', /**... */]

    // Si la letra esta dentro de consonates O esta dentro de vocales
    if (consonantes.indexOf(letra) != -1 || vocales.indexOf(letra) != -1){
        // Entonces imprimo si es consonante o es vocal
        console.log(
            // Comparacion de si esta o no en consonate ? Escribe consonante si es true
            // o escribe vocal si es false
            (consonantes.indexOf(letra) != -1) ? "Consonante":"Vocal"
        )
    }else{
        console.log("No es ni consonante ni vocal")
    }
}


//**********************************************************
//----------------------------------------------------------
// Las estructuras for
//----------------------------------------------------------
//**********************************************************

// Nos sirven para calcular resultados que requieren repetir un proceso
// o recorrer arreglos para procesar sus datos

/**
 * Imprime un rectangulo de alto 'a' y de ancho 'b'
 * Parámetros:
 * - a: alto del rectangulo
 * - b: ancho del rectangulo
 */
function imprimirRectangulo(a,b){
    let cadena;
    for(let i = 0; i < a; i++){
        cadena = ""
        for(let j = 0; j < b; j++){
            cadena += "*"
        }
        // Deibido a que algunos navegadores comprimen salidas en consola
        // es necesario cambiar la línea un poco para que no comprima líneas
        if(i%2 == 0)
            cadena += " "
        console.log(cadena)
    }
}

/**
 * Imprime en consola letra a letra una palabra completa.
 * Parámetros:
 * - palabra: el conjunto de letras que se iterará para imprimir
 */
function deletrear(palabra){
    for(i=0; i < palabra.length; i++ ){
        console.log(palabra[i])
    }
}

/**
 * Ciclo que itera numericamente al revés con la variable de control 'i', 
 * pero a su vez tiene otra variable de control 'j' que aumenta normalmente
 */
function reversa(){
    for(i = 100, j = 0; i > 0; i--, j++){
        console.log(i + " - " + j)
    }
}

/** 
 * EJERCICIO EN CLASE:
 * Contar letras dentro de una palabra del tipo de letra que se le indique
 */
function cuentaLetras(palabra, letra){
    cuenta = 0
    for(i = 0; i < palabra.length; i++){
        if(letra == palabra[i]){ // Cada vez que encuentra la letra dentro de la palabra
            cuenta += 1 // Aumento en 1 la cuenta
        }
    }
    console.log(cuenta)
}

/**
 * Consejo: Cuando no sepas exacamente que hace tu ciclo, puedes utilizar
 * un grupo en consola e imprimir dentro del grupo toda la info relevante. 
 * De esta forma puedes ver por cada iteración 
 */
// Serie 2^n
function verConsejo1(){
    let numero = 1;
    console.log(`Inicio el ciclo for, empezando con i=0`)
    for(i=0; i<10; i++){
        console.group("Iteración "+i)
        console.log(`Mi variable de control i tiene el valor ${i}`)
        console.log(`Como i<10 fue ${i}<10 = ${i<10} entro a otra iteración`)
    
        console.log(`Ejecuto mi código`)
    
        console.log(`Número: ${numero}`)
    
        console.log(`Sumo numero + numero = ${numero} + ${numero} = ${numero+numero}`)
        numero += numero
    
        console.log(`Ya terminé el bloque, entonces realizo la tercera acción: i++ = ${i+1}`)
        console.groupEnd()
    }
    console.log(`Salí porque ${i}<10 es ${i<10}`)
}


//**********************************************************
//----------------------------------------------------------
// CICLO EXTRA: Foreach
//----------------------------------------------------------
//**********************************************************

// ALERTA: Antes de ver el ejemplo, toma en consideración que
// requieres conocimientos más avanzados para comprender por
// completo el ejemplo. Te recomendamos adentrarte un poco en:
// - Programación Orientada a Objetos
//   - Clases, Objetos e Instancias
//     - Métodos
// - Funciones Callback

// El ciclo Foreach es un método de los objetos de tipo Array (arreglo)
// el cual nos permite iterar cada elemento de nuestro arreglo.
// Pide una función Callback, la cual recibe como parámetro uno de los
// componentes del arreglo y se ejecutará para todos y cada uno de los
// elementos de forma ordenada.

/**
 * Cuenta las letras en una palabra e imprime el resultado
 */
function cuentaLetrasForEach(palabra, letra){
    var cuenta = 0;
    // Objetos y clases
    // - Metodos
    // Funciones Callback
    Array.from(palabra).forEach(function(letraDePalabra){
        console.log(letraDePalabra)
        if (letraDePalabra == letra)
            cuenta++;
    });
    console.log(cuenta)
}

