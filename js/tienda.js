//let div = document.getElementById("divData");
//let mainProds = document.getElementById("mainProductos");
let check1 = document.getElementById("customCheck1");
let check2 = document.getElementById("customCheck2");
let check3 = document.getElementById("customCheck3");
let check4 = document.getElementById("customCheck4");
let check5 = document.getElementById("customCheck5");
let check6 = document.getElementById("customCheck6");
let check7 = document.getElementById("customCheck7");
let check8 = document.getElementById("customCheck8");
let check9 = document.getElementById("customCheck9");
let check10 = document.getElementById("customCheck10");
let check11 = document.getElementById("customCheck11");
let check12 = document.getElementById("customCheck12");
let check13 = document.getElementById("customCheck13");


check1.addEventListener("click", filtrar);
check2.addEventListener("click", filtrar);
check3.addEventListener("click", filtrar);
check4.addEventListener("click", filtrar);
check5.addEventListener("click", filtrar);
check6.addEventListener("click", filtrar);
check7.addEventListener("click", filtrar);
check8.addEventListener("click", filtrar);
check9.addEventListener("click", filtrar);
check10.addEventListener("click", filtrar);
check11.addEventListener("click", filtrar);
check12.addEventListener("click", filtrar);
check13.addEventListener("click", filtrar);

function filtrar (event){
    console.log(event.target.value);
    let elementos = Array.from(document.getElementsByClassName(event.target.value)); //Array.from convierte algo en un arreglo.
    elementos.forEach((e)=>{
        if (event.target.checked){
            e.style.display="block";
        } else {
            e.style.display="none";
        }// if
    });
};//filtrar








addItem({'name':'Aceite para masaje',
    'img':'/img/Productos/Aceite para Masaje/ACEITE_MASAJE_ALMENDRAS.png',
    'description':'Almendras',
    'precio':'200', 
    'categoria':'Aceites para masaje',
    'id':'1'});

addItem({'name':'Aceite para masaje',
    'img':'/img/Productos/Aceite para Masaje/ACEITE_MASAJE_TORONJA.png',
    'description':'Toronja',
    'precio':'200',
    'categoria':'Aceites para masaje',
    'id':'2'});

addItem({'name':'Ablandador de callos',
    'img':'/img/Productos/Basicos/ABLANDADOR_CALLOS.png',
    'description':'15 ml',
    'precio':'200',
    'categoria':'Básicos',
    'id':'3'});

addItem({'name':'Aceite para cuticula',
    'img':'/img/Productos/Basicos/ACEITE_CUTICULA.png',
    'description':'15 ml',
    'precio':'250',
    'categoria':'Básicos',
    'id':'4'});

addItem({'name':'Removedor de cuticula',
    'img':'/img/Productos/Basicos/BG_SPA_BASICOS_REMOVEDOR_DE_CUTICULA.png',
    'description':'15 ml',
    'precio':'250',
    'categoria':'Básicos',
    'id':'5'});

    addItem({'name':'Lija de Pie',
    'img':'/img/Productos/Basicos/LIJAPIE.png',
    'description':'',
    'precio':'',
    'categoria':'Básicos',
    'id':'6'});

addItem({'name':'BIO JELLY - Tropical',
    'img':'/img/Productos/Bio Jelly Spa/BIO_JELLY_90g(2).png',
    'description':'',
    'precio':'',
    'categoria':'Bio Jelly Spa',
    'id':'7'});

addItem({'name':'BIO JELLY - Menta',
    'img':'/img/Productos/Bio Jelly Spa/BIO_JELLY_90g(3).png',
    'description':'',
    'precio':'',
    'categoria':'Bio Jelly Spa',
    'id':'8'});

addItem({'name':'BIO JELLY - Coco',
    'img':'/img/Productos/Bio Jelly Spa/BIO_JELLY_90g(4).png',
    'description':'',
    'precio':'',
    'categoria':'Bio Jelly Spa',
    'id':'9'});

addItem({'name':'BIO JELLY - Té verde',
    'img':'/img/Productos/Bio Jelly Spa/BIO_JELLY_90g(5).png',
    'description':'90 g',
    'precio':'', 
    'categoria':'Bio Jelly Spa',
    'id':'10'});

    addItem({'name':'BIO JELLY - Naranja',
    'img':'/img/Productos/Bio Jelly Spa/BIO_JELLY_90g(6).png',
    'description':'90 g',
    'precio':'',
    'categoria':'Bio Jelly Spa'})

addItem({'name':'BIO JELLY - Flowers',
    'img':'/img/Productos/Bio Jelly Spa/BIO_JELLY_90g(7).png',
    'description':'90 g',
    'precio':'',
    'categoria':'Bio Jelly Spa' });

addItem({'name':'BIO JELLY - Limón',
    'img':'/img/Productos/Bio Jelly Spa/BIO_JELLY_90g(8).png',
    'description':'90 g',
    'precio':'',
    'categoria':'Bio Jelly Spa'});

addItem({'name':'BIO JELLY - Lavanda',
    'img':'/img/Productos/Bio Jelly Spa/BIO_JELLY_90g.png',
    'description':'90 g',
    'precio':'',
    'categoria':'Bio Jelly Spa'});

addItem({'name':'Bath Bomb Colección RAINBOW',
    'img':'/img/Productos/Bombas Efervescentes/BOMBAS_EFERVESCENTES_RAINBOW.png',
    'description':'12 piezas',
    'precio':'',
    'categoria':'Bombas Efervescentes' });
