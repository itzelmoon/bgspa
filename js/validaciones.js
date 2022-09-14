let btnSubmit = document.getElementById("btnValidar");
let campoTelefono = document.getElementById("validationNumber");

btnSubmit.addEventListener("click", function(e){ 
    e.preventDefault();

    
    
//Validacion Telefono
if((campoTelefono.value.length == 10) && (!isNaN(campoTelefono.value))) {
    campoTelefono.classList.remove("is-invalid");
    campoTelefono.classList.add("is-valid");
} else {
    campoTelefono.classList.remove("is-valid");
    campoTelefono.classList.add("is-invalid");
}

});