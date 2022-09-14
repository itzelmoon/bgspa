let btnSubmit = document.getElementById("btnValidar");

btnSubmit.addEventListener("click", function(e){ 
    e.preventDefault();
    let nombre = document.getElementById("Nombre");
    let apellido = document.getElementById("Apellido");
    let campoMensaje = document.getElementById("campoMensaje");
    let campoTelefono = document.getElementById("validationNumber");
    let confirmarCorreo = document.getElementById("validationCorreo");


    //validación de nombre
    nombre.classList.remove("is-invalid");
    nombre.classList.add("is-valid");

    if ( nombre.value.length > 3 && nombre.value.length < 20) {
        nombre.classList.add("is-valid"); 
    }
    else{  
        nombre.classList.add("is-invalid");
    }

    for (let i = 0; i < nombre.value.length; i++) {
        console.log(nombre.value.charAt(i));
    
                console.log(nombre.value.charAt(i));
                console.log(nombre.value.charCodeAt(i));
                if((
                
                    (nombre.value.toUpperCase().charCodeAt(i)<65)
                    || //condición or
                    (nombre.value.toUpperCase().charCodeAt(i)>90)
                ) && ((nombre.value.toUpperCase().charCodeAt(i)!=32)) //espacio
                &&((nombre.value.toUpperCase().charCodeAt(i)!=193)) //Á el to uper fue para comparar tambien con las mayuculas
                &&((nombre.value.toUpperCase().charCodeAt(i)!=201)) //É
                &&((nombre.value.toUpperCase().charCodeAt(i)!=205)) //Í
                &&((nombre.value.toUpperCase().charCodeAt(i)!=211)) //Ó
                &&((nombre.value.toUpperCase().charCodeAt(i)!=218)) //Ú
                &&((nombre.value.toUpperCase().charCodeAt(i)!=209)) //Ñ

                ) {
                        nombre.classList.remove("is-valid");
                        nombre.classList.add("is-invalid");
                        break;
                } //if
            }//for

        //validación de apellido
    apellido.classList.remove("is-invalid");
    apellido.classList.add("is-valid");

    if ( apellido.value.length > 3 && apellido.value.length < 20) {
        apellido.classList.add("is-valid"); 
    }
    else{  
        apellido.classList.add("is-invalid");
    }

    for (let i = 0; i < apellido.value.length; i++) {
        console.log(apellido.value.charAt(i));
    
                console.log(apellido.value.charAt(i));
                console.log(apellido.value.charCodeAt(i));
                if((
                
                    (apellido.value.toUpperCase().charCodeAt(i)<65)
                    || //condición or
                    (apellido.value.toUpperCase().charCodeAt(i)>90)
                ) && ((apellido.value.toUpperCase().charCodeAt(i)!=32)) //espacio
                &&((apellido.value.toUpperCase().charCodeAt(i)!=193)) //Á el to uper fue para comparar tambien con las mayuculas
                &&((apellido.value.toUpperCase().charCodeAt(i)!=201)) //É
                &&((apellido.value.toUpperCase().charCodeAt(i)!=205)) //Í
                &&((apellido.value.toUpperCase().charCodeAt(i)!=211)) //Ó
                &&((apellido.value.toUpperCase().charCodeAt(i)!=218)) //Ú
                &&((apellido.value.toUpperCase().charCodeAt(i)!=209)) //Ñ

                ) {
                        apellido.classList.remove("is-valid");
                        apellido.classList.add("is-invalid");
                        break;
                } //if
            }//for



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