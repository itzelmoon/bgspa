let btnSuscribirse = document.getElementById("btnSuscribirse");


btnSuscribirse.addEventListener("click", function(e){
    e.preventDefault();
    let correofooter = document.getElementById("inputEmail");
    let valorcorreofooter = document.getElementById("inputEmail").value;

    let flagfooter = false;
    
    //validacion correo footer
    function validarCorreo (correo) {
        let expReg = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
        let verificar = expReg.test(correo);
        console.log(verificar)
        if(verificar){
            correofooter.classList.remove("is-invalid");
            correofooter.classList.add("is-valid");
            flagfooter = true
        } else {
            correofooter.classList.remove("is-valid");
            correofooter.classList.add("is-invalid");
            flagfooter = false
        }
    }
    validarCorreo(valorcorreofooter);

});