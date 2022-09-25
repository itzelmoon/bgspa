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
    let descripcion = document.getElementById("campoDescripcion");

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
      


});
