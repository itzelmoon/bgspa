//Este código queda pendiente de corregir ya que unicamente funciona en la página de login.js 
const usuarios = localStorage.getItem("info")
let existenciaStorage = false
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
    let alerterror = document.getElementById("alertaerror");
    let formulario = document.getElementById("formulario");    

    //VALIDACIONES DE FORMULARIO
    const flag = {
    correoe: false,
    contraseña:false
    }

    //Validación correo
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

    //Validación contraseña
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

    if (flag.correoe && flag.contraseña){
        AlertLogin();
    } else {
        alerterror.style.display = "block";
        setTimeout(()=>{alerterror.style.display = "none"}, (7000));      
    }//else

    if(usuarios){
        let conversion = JSON.parse(usuarios);
        arregloUsuarios = conversion;
        existenciaStorage = true;
    }//if para comprobar que existan usuarios registrados

    let sesion = false;
    if(existenciaStorage){
        for (let i = 0; i < arregloUsuarios.length; i++) {
            if((arregloUsuarios[i].correo === valorcorreo)&&(arregloUsuarios[i].contraseña === valorcontraseña)){
                nombreUsuario = arregloUsuarios[i].name
                localStorage.setItem("sesionIniciada", "true")
                localStorage.setItem("nombreUsuario", nombreUsuario)
                sesion = true
                break
            }//if si coinciden contrasena y email.
        }//for para verificar que los campos coincidan con el storage
        
        if(sesion){
            location.href = "http://127.0.0.1:5503/index.html"
        } else {
            valorcorreo = "";
            valorcontraseña = "";
        }
        
    
    }// if que exista algun usuario en el estorage

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
            myFunction();

    }else{
        alert("wrong password")
        }
    }else{
        alert("Invalid")
    }

}

let x = document.getElementById("a");

function myFunction() {
    if (x.style.display === "none") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}


let cerrar = document.getElementById("cerrar");
cerrar.addEventListener("click",function(e){
e.preventDefault();
    if (x.style.display === "block") {
        x.style.display = "none";
    }

}) 

//------------AlertLogin en Flag general--------------
const AlertLogin = () => {
    Swal.fire({
                    position: 'top',
                    color: '#A97798',
                    background: '#F9F9F9',
                    icon: 'success',
                    title: '¡Bienvenido!',
                    text: 'Disfruta la mágia de los productos BG SPA.',
                    confirmButtonText: 'Aceptar',
                    confirmButtonColor: '#A058A1',
                    showConfirmButton: true,
                    showCloseButton: true,
                    toast: true
                  }) 
                };