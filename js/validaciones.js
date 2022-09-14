let btnSubmit = document.getElementById("btnValidar");

btnSubmit.addEventListener("click", function(e){ 
    e.preventDefault();
    let campoMensaje = document.getElementById("campoMensaje");
    let campoTelefono = document.getElementById("validationNumber");
    let confirmarCorreo = document.getElementById("validationCorreo");

    //Validacion Telefono
    if((campoTelefono.value.length == 10) && (!isNaN(campoTelefono.value))) {
        campoTelefono.classList.remove("is-invalid");
        campoTelefono.classList.add("is-valid");
    } else {
        campoTelefono.classList.remove("is-valid");
        campoTelefono.classList.add("is-invalid");
    }

    // Validacion Mensaje
    if (campoMensaje.value.length >= 10) { //validacion Nombre
        campoMensaje.classList.remove("is-invalid");
        campoMensaje.classList.add("is-valid");
    } else {
        campoMensaje.classList.remove("is-valid");
        campoMensaje.classList.add("is-invalid");
    }







      //confirmacion correo
      if (valorcorreo === confirmar){
        confirmarCorreo.classList.remove("is-invalid");
        confirmarCorreo.classList.add("is-valid");
    } else {
        confirmarCorreo.classList.remove("is-valid");
        confirmarCorreo.classList.add("is-invalid");
    }
});