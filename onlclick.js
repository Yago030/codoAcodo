function cambiarTexto(){
    var x = document.getElementsByClassName("ejemplo")
    console.log(x);
    x[0].innerHTML = "avantiiiiiiiiiiiiiiii  ";
}

function cambiarTextoDos(){
    var ejemplos = document.getElementsByClassName("ejemplo")
    for(var i = 0; i < ejemplos.length; i++){
        ejemplos[i].innerHTML = ` Probando cambiando todo los parrafos${i+1}`
        console.log(ejemplos[i]);
    }

}



//get elementByTagName

function obtenerTag(){
    var x = document.getElementsByName("fname")[0].tagName
    document.getElementById("demo").innerHTML = "Es un  "+x
}

function obtenerValor(){
    var y = document.getElementsByName("fname")[1].value
    document.getElementById("demo2").innerHTML = "El nombre es: " +y 
}



function validarValor() {
    var var1 = document.getElementsByName("fname")[1].value;
    if (var1 === "") {
        document.getElementById("validar").innerHTML = "Input vacío";
    } else {
        document.getElementById("validar").innerHTML = "¡OK!";
    }
}


function obtenerElemento(){
    var z = document.getElementsByTagName("li") //obtenemos los elementos li
    var a  = document.getElementById("seleccion").value // obtenemos lo que escribiio el usuario
    if (a ===""){
        document.getElementById("demo3").innerHTML = "El usuario no ah seleccionado nada"

    }else if ( a>=1 && a <=3){
        document.getElementById("demo3").innerHTML = "ah seleccionado: " + z[a-1].textContent
    }else{
        document.getElementById("demo3").innerHTML = "valor incorrecto !, selecciona el correcto ! "
    }


}



function agregarFondo(){
    document.querySelector(".ejemplo2").style.backgroundColor = "lightblue";
    document.querySelector(".ejemplo2").style.color = "red";
    document.querySelector(".ejemplo2").style.fontFamily = "Tahoma";
    document.querySelector(".ejemplo2").style.fontSize = "4rem";
    document.querySelector(".boton").innerHTML = "Gracias ! :)"
}

function pintar(){
    var x, y
    x = document.querySelectorAll(".subtitulo")
    for (let i =0; i < x.length; i++){
        x[i].style.backgroundColor="rgb(150,150,0"
    }
    y = document.querySelectorAll(".parrafo")
    for (let i = 0; i < y.length; i++){
        y[i].style.backgroundColor="rgb(200,200,100)"
    }


}


function pintarAleatorio(){
    var r,g, b, x, y
    r = Math.floor(Math.random()*255)
    g = Math.floor(Math.random()*255)
    b = Math.floor(Math.random()*255)
   
    x = document.querySelectorAll(".subtitulo")
    for(let i =0; i < x.length; i++){
        x[i].style.backgroundColor =  `rgb(${r},${g},${b})`
    }



    var r,g, b, x, y
    r = Math.floor(Math.random()*255)
    g = Math.floor(Math.random()*255)
    b = Math.floor(Math.random()*255)
   
    x = document.querySelectorAll(".parrafo")
    for(let i =0; i < x.length; i++){
        x[i].style.backgroundColor =  `rgb(${r},${g},${b})`
    }

}