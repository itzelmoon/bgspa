let btnSubmit = document.getElementById("btnAgregar");
let productos = [];
let cont = 1;
let ident = 0;
let lista = document.getElementById("lista");
const key = "info";

btnSubmit.addEventListener("click", function(e){ 
    e.preventDefault();
    let nombre = document.getElementById("campoProducto");
    let archivo = document.getElementById("campoArchivo");
    let categoria = document.getElementById("inlineFormCustomSelect");
    let precio = document.getElementById("campoPrecio");
    let envia = document.getElementById("campoPrecio").value;
    let descripcion = document.getElementById("campoDescripcion");
    let alertexitosa = document.getElementById("alertaexitosa");
    let alerterror = document.getElementById("alertaerror");
    let formulario = document.getElementById("formulario"); 


    ///JSON Y LOCAL STORAGE
    let arregloProductos = {
        "id" : cont,
        "name": nombre.value,
        "img": archivo.value,
        "descripcion": descripcion.value,
        "precio": parseFloat(precio.value),
        "categoria": categoria.value
    };

    cont++;
    ident++;
    productos.push(arregloProductos);
    console.log(productos);


    let id_row = 'row' + cont; //
    let fila_todascolumnas = `<tr id= ${id_row} row-sm-12 row-md-12 ><td> ${ident} </td><td>        
    ${nombre.value} </td><td> ${archivo.value} </td><td> ${descripcion.value} </td><td>$ ${parseFloat(precio.value)} </td><td> ${categoria.value} </td></tr>`;
   
    //Agregar a la tabla
    $("#lista").append(fila_todascolumnas); //

     //------------LocalStorage--------------------------------------
     JSON.stringify(productos);
     localStorage.setItem(key, JSON.stringify(productos));
 
     //Comprobación de valores en la consola.
     let n = nombre.value;
     let a = archivo.value;
     let d = descripcion.value;
     let p = parseFloat(precio.value);
     let c = categoria.value;
 
 
     console.log(n);
     console.log(a);
     console.log(d);
     console.log(p);
     console.log(c);

     //VALIDACIONES DE FORMULARIO
     const flag = {
        nombre: false,
        precio: false,
        categoria: false,
        descripcion: false,
        archivo:false
    }
    //validación de nombreProducto
    nombre.classList.remove("is-invalid");
    nombre.classList.add("is-valid");

    if ((nombre.value.length >= 5) && !(nombre.value.trim() == "") && (nombre.value[0] != " ")) {
        nombre.classList.add("is-valid"); 
        flag.nombre = true
    }
    else{  
        nombre.classList.add("is-invalid");
        flag.nombre = false
    }

    







    //ALERTA GENERAL
    if (flag.nombre && flag.precio && flag.descripcion && flag.categoria && flag.archivo){
        alertexitosa.style.display = "block";
        setTimeout(()=>{alertexitosa.style.display = "none"}, (5000));
        formulario.reset();
        nombre.classList.remove("is-valid")
        precio.classList.remove("is-valid")
        descripcion.classList.remove("is-valid")
        categoria.classList.remove("is-valid")
        archivo.classList.remove("is-valid")
    } else {
        alerterror.style.display = "block";
        setTimeout(()=>{alerterror.style.display = "none"}, (7000));
    }
      


});
