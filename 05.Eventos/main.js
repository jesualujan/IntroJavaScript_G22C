
// DOM va a contener a todos nuestros elementos de forma jerarquica o como arbol

/** => Dice que () son parametros de la función lambda definida por/entre llaves {} */
document.querySelector("#btnSumar").onclick = (/** Parametros */) => {
    let num1 = parseFloat(document.getElementById("numero1").value);
    let num2 = parseFloat(document.getElementById("numero2").value);

    document.querySelector("#resultado").innerHTML = num1+ num2;
}


// Mantra: que evento voy a escuchar y que voy a realizar
document.querySelector("#divComparar").addEventListener("click", function(){
    let num3 = document.querySelector("#numero3").value;
    if(num3 > 50){ // Mayor o menor a 50
        document.querySelector("#resultadoComparacion").innerHTML = "Es mayor a 50"
    }else if(num3 == 50){
        document.querySelector("#resultadoComparacion").innerHTML = "Es igual 50"
    }else{
        document.querySelector("#resultadoComparacion").innerHTML = "Es menor 50"
    }
});


document.querySelector("#divMouse").addEventListener("mouseover", function(){
    document.querySelector("#divMouse").style.backgroundColor = "#000000"
});

document.querySelector("#divMouse").addEventListener("mouseleave", function(){
    document.querySelector("#divMouse").style.backgroundColor = "#ffffff"
});
