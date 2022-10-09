if ((localStorage.getItem("sesionIniciada")) == "true"){
    let cerrarSesion = document.getElementById("cerrarSesion")
    let acceder = document.getElementById("acceder")
    acceder.remove()
    cerrarSesion.classList.add("dropdown")
    cerrarSesion.innerHTML = `<a id="cerrarSesion" class="nav-link text-primary" href="http://127.0.0.1:5503/index.html">Cerrar Sesion</a>`
    cerrarSesion.addEventListener("click", function(e){
        localStorage.removeItem("sesionIniciada")
        localStorage.removeItem("nombreUsuario")
    })
    } 