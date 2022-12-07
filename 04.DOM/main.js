//* EN NUESTRO MAIN.JS 
//* VAMOS A MANIPULAR NUESTROS ELEMENTOS HTML UTILIZANDO JAVASCRIPT (DOM)
//* DOM UTILIZAR SCOPE GLOBAL SCOPE LOCAL 

//* EJEMPLO DE SCOPE GLOBAL
    // const usuario = document.getElementById("#form")


//? SCOPE LOCAL , FUNCIONES 

 //* INPUT RADIO
    function green(){
        if(document.querySelector("#green").checked){
            background.style.background = "#2cbb40"
            title.style.color = "white"
        }
    }

    function purple(){
        if(document.querySelector("#purple").checked){
            background.style.background = "#56307C"
            title.style.color = "white"
        }
    }

    function blue(){
        if(document.querySelector("#blue").checked){
            background.style.background = "#6FB1FC"
        }
    }

     //* BOTONES

     function warning(){
        // CREAR UN DELAY COMO ESTILO 
        setTimeout(function(){
                background.style.background = "#FFC107"
                title.style.color = "black"
        },500)
     }

     function secondary(){
        //AGREGAR UN setTimeout para tener un pequeño delay
            background.style.background = "#6C757D"
     }

     function danger (){
            setTimeout(function(){
                background.style.background = "#DC3545"
            },5000)
     }