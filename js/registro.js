let btnSubmit = document.getElementById("btnRegistrarse");

function mostrarContraseña(){
    let tipo = document.getElementById("contraseña");
    if(tipo.type == "password"){
        tipo.type = "text";
    }else{
        tipo.type = "password";
    }
}

function mostrarContraseña2(){
    let tipo = document.getElementById("validacionContraseña");
    if(tipo.type == "password"){
        tipo.type = "text";
    }else{
        tipo.type = "password";
    }
}

btnSubmit.addEventListener("click", function(e){ 
    e.preventDefault();
    let nombre = document.getElementById("Nombre");
    let apellido = document.getElementById("Apellido");
    let telefono = document.getElementById("validationNumber");
    let correoe = document.getElementById("correo");
    let valorcorreo = document.getElementById("correo").value;
    let contraseña = document.getElementById("contraseña")
    let valorcontraseña = document.getElementById("contraseña").value
    let valcontraseña = document.getElementById("validacionContraseña");
    let contrase = document.getElementById("validacionContraseña").value;
    let alertexitosa = document.getElementById("alertaexitosa");
    let alerterror = document.getElementById("alertaerror");
    let formulario = document.getElementById("formulario"); 

     //VALIDACIONES DE FORMULARIO
     const flag = {
        nombre: false,
        apellido: false,
        telefono: false,
        correoe: false,
        contraseña:false,
        valcontraseña:false
    }