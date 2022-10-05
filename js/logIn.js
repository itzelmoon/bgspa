let btnSubmit = document.getElementById("btnIniciarSesion");

function mostrarContraseña(){
    let tipo = document.getElementById("contraseña");
    if(tipo.type == "password"){
        tipo.type = "text";
    }else{
        tipo.type = "password";
    }
}

btnSubmit.addEventListener("click", function(e){ 
    e.preventDefault(); 
    let correoe = document.getElementById("correo");
    let valorcorreo = document.getElementById("correo").value;
    let contraseña = document.getElementById("contraseña");
    let valorcontraseña = document.getElementById("contraseña").value;

         //VALIDACIONES DE FORMULARIO
         const flag = {
            correoe: false,
            contraseña:false
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

    //validacion contraseña
    function validarContraseña (contra) {
        let expReg =/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&#.$($)$-$_])[A-Za-z\d$@$!%*?&#.$($)$-$_]{8,15}$/;
        let verificarcontraseña = expReg.test(contra);
        console.log(verificarcontraseña)
        if(verificarcontraseña){
            contraseña.classList.remove("is-invalid");
            contraseña.classList.add("is-valid");
            flag.contraseña = true
        } else {
            contraseña.classList.remove("is-valid");
            contraseña.classList.add("is-invalid");
            flag.contraseña = false
    }
    }
    validarContraseña(valorcontraseña); 

});//btnSubmit

function checkData(){
    let enterEmail = document.getElementById("correo").value;
    let enterPwd = document.getElementById("contraseña").value;

    //get data from localstorage
    let getEmail = localStorage.getItem("userEmail");
    let getPwd = localStorage.getItem("userPwd");

    if(enterEmail == getEmail){
        if(enterPwd == getPwd){
            alert("Login Successful");

    }else{
        alert("wrong password")
        }
    }else{
        alert("Invalid")
    }

}