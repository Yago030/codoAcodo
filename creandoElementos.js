

function agregarParrafo(){

    var par = document.createElement("p");
    par.innerHTML = "Parrafo creado!";
    document.body.appendChild(par);
}


function agregarDatos(){
    var nom = document.getElementById("nombre").value;
    var ape = document.getElementById("apellido").value;
    var datos = document.createElement("p");

    datos.innerHTML =`<b>Apellido:  </b> ${ape} <br> <b>Nombre: ${nom}</b>`
}


let img;


