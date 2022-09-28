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
    
     //validación de nombre
     nombre.classList.remove("is-invalid");
     nombre.classList.add("is-valid");
 
     if ((nombre.value.length >= 3) && !(nombre.value.trim() == "") && (nombre.value[0] != " ")) {
         nombre.classList.add("is-valid"); 
         flag.nombre = true
     }
     else{  
         nombre.classList.add("is-invalid");
         flag.nombre = false
     }
 
     //validación de apellido
     apellido.classList.remove("is-invalid");
     apellido.classList.add("is-valid");
     
     if ((apellido.value.length >= 3) && !(apellido.value.trim() == "") && (apellido.value[0] != " ")) {
         apellido.classList.add("is-valid"); 
         flag.apellido = true
     }
     else{  
         apellido.classList.add("is-invalid");
         flag.apellido = false
     }
 
     //Validacion Telefono
     if((telefono.value.length == 10)&&(telefono.value!=0)
     ) {
         telefono.classList.remove("is-invalid");
         telefono.classList.add("is-valid");
         flag.telefono = true
     } else {
         telefono.classList.remove("is-valid");
         telefono.classList.add("is-invalid");
         flag.telefono = false
     }
 
     //validacion correo
     function validarCorreo (correo) {
     let expReg = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
     let verificar = expReg.test(correo);
     console.log(verificar)
     if(verificar){
         correoe.classList.remove("is-invalid");
         correoe.classList.add("is-valid");
         flag.correoe = true
     } else {
         correoe.classList.remove("is-valid");
         correoe.classList.add("is-invalid");
         flag.correoe = false
     }
     }
     validarCorreo(valorcorreo); 






    });//btnSubmit