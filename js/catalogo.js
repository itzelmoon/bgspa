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


function addItem(item){
    const itemHTML = `<div class="${getClassCategory(item.categoria)} all col-md-3 col-lg-3 col-xl-3 col-sm-6">
    <div class="rd" style="width:auto;">
    <a href="#"><img src="${item.img}" class="card-img-top" data-toggle="modal" data-target="#modal_${item.id}" alt="..." /></a>
    </div>
    <br>
    <div class="card-body fondocard carta">
      <p class="fontbold cardRe">${item.name}</p>
      <p class="card-text">$ ${item.precio}</p>
      <p class="card-text">${item.description.slice(0,25)}...<i class="bi bi-caret-right-fill" data-toggle="modal" data-target="#modal1_${item.id}" ></i></p>
      <br>
      <div class="container btnAnadir">
        <button type="button" class="btnEnviar" id="btnValidar">Añadir</button>
      </div>
    </div>
  </div>

  <!-- Modal -->
  <div class="modal fade" id="modal_${item.id}" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">${item.name}</h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
        <img src="${item.img}" class="card-img-top" alt="..." />
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-dismiss="modal">Cerrar</button>
        </div>
      </div>
    </div>
  </div>


  <!-- Modal -->
<div class="modal fade" id="modal1_${item.id}" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-md modal-dialog-centered">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">${item.name}</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        ${item.description}
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Cerrar</button>
      </div>
    </div>
  </div>
</div>`;


    const itemsContainer = document.getElementsByClassName("list-items")[0];
    itemsContainer.innerHTML += itemHTML;
}







  function getClassCategory(cat){
    let c = "";
    switch (cat) {
        case "Aceites para masaje":
            c = "aceite";
            break;
        case "Básicos":
            c = "basicos"
            break;
        case "Bio Jelly Spa":
            c = "jelly"
            break;
        case "Bombas Efervescentes":
            c = "bombas"
            break;
        case "Complementos":
            c="comple"
            break;
        case "Cremas Hidratantes":
            c="cremas"
            break;
        case "Exfoliantes":
            c="exfo";
            break;
        case "Hidratantes Bifásicos":
            c="hidra";
            break;
        case "Kit":
            c="kit";
            break;
        case "Mascarillas":
            c="masc";
            break;
        case "Sales Efervescentes":
            c="sales";
            break;
        case "Sales Minerales":
            c="salmin";
            break;
        case "Sanitizantes y Limpiadores":
            c="san";
            break;
        default:
            c="all";
            break;
    }//switch
    return c;
}//getClassCategory






addItem({'name':'Aceite para masaje',
    'img':'../img/productos/aceitesParaMasaje/aceite_para_masaje_ALMENDRAS_DULCES_1_Litro.png',
    'description':'Almendras',
    'precio':'200', 
    'categoria':'Aceites para masaje',
    'id':'1'});

addItem({'name':'Aceite para masaje',
    'img':'../img/productos/aceitesParaMasaje/aceite_para_masaje_TORONJA_1_Litro.png',
    'description':'Toronja',
    'precio':'200',
    'categoria':'Aceites para masaje',
    'id':'2'});

addItem({'name':'Ablandador de callos',
    'img':'../img/productos/basicos/ablandador_de_callosidades_60_ml.png',
    'description':'15 ml',
    'precio':'200',
    'categoria':'Básicos',
    'id':'3'});

addItem({'name':'Aceite para cuticula',
    'img':'../img/productos/basicos/removedor_de_cuticulas_1_litro.png',
    'description':'15 ml',
    'precio':'250',
    'categoria':'Básicos',
    'id':'4'});

addItem({'name':'Removedor de cuticula',
    'img':'../img/productos/basicos/removedor_de_cuticulas_1_litro.png',
    'description':'15 ml',
    'precio':'250',
    'categoria':'Básicos',
    'id':'5'});

addItem({'name':'Lija de Pie',
    'img':'../img/productos/basicos/lija_Pie_Pedicure_De_Madera_.png',
    'description':'',
    'precio':'',
    'categoria':'Básicos',
    'id':'6'});

addItem({'name':'BIO JELLY - Tropical',
    'img':'../img/productos/bioJellySpa/BIO JELLY SPA 1 kg. TROPICAL.png',
    'description':'',
    'precio':'',
    'categoria':'Bio Jelly Spa',
    'id':'7'});

addItem({'name':'BIO JELLY - Menta',
    'img':'../img/productos/bioJellySpa/BIO JELLY SPA 1 kg. MENTA.png',
    'description':'',
    'precio':'',
    'categoria':'Bio Jelly Spa',
    'id':'8'});

addItem({'name':'BIO JELLY - Coco',
    'img':'../img/productos/bioJellySpa/BIO JELLY SPA 1 kg. COCONUT.png',
    'description':'',
    'precio':'',
    'categoria':'Bio Jelly Spa',
    'id':'9'});

addItem({'name':'BIO JELLY - Té verde',
    'img':'../img/productos/bioJellySpa/BIO JELLY SPA 1 kg. TÉ VERDE.png',
    'description':'90 g',
    'precio':'', 
    'categoria':'Bio Jelly Spa',
    'id':'10'});

    addItem({'name':'BIO JELLY - Naranja',
    'img':'../img/productos/bioJellySpa/BIO JELLY SPA 1 kg. NARANJA.png',
    'description':'90 g',
    'precio':'',
    'categoria':'Bio Jelly Spa'})

addItem({'name':'BIO JELLY - Flowers',
    'img':'../img/productos/bioJellySpa/BIO JELLY SPA 1 kg. FLOWERS.png',
    'description':'90 g',
    'precio':'',
    'categoria':'Bio Jelly Spa' });

addItem({'name':'BIO JELLY - Limón',
    'img':'../img/productos/bioJellySpa/BIO JELLY SPA 1 kg. LIMÓN.png',
    'description':'90 g',
    'precio':'',
    'categoria':'Bio Jelly Spa'});

addItem({'name':'BIO JELLY - Lavanda',
    'img':'../img/productos/bioJellySpa/BIO JELLY SPA 1 kg. LAVANDA.png',
    'description':'90 g',
    'precio':'',
    'categoria':'Bio Jelly Spa'});

addItem({'name':'Bath Bomb Colección RAINBOW',
    'img':'../img/productos/bombasEfervescentes/BOMBAS_EFERVESCENTES_RAINBOW.png',
    'description':'12 piezas',
    'precio':'',
    'categoria':'Bombas Efervescentes' });

    addItem({'name':'Bath Bomb Colección GEMSTONE',
    'img':'../img/productos/bombasEfervescentes/BOMBAS_EFERVESCENTES_GEMSTONE.png',
    'description':'12 piezas',
    'precio':'',
    'categoria':'Bombas Efervescentes'});

addItem({'name':'Bath Bomb Colección HEALING',
    'img':'../img/productos/bombasEfervescentes/BOMBAS_EFERVESCENTES_HEALING.png',
    'description':'12 piezas',
    'precio':'',
    'categoria':'Bombas Efervescentes'});

addItem({'name':'Adhesivo para Foil',
    'img':'../img/productos/complementos/Pegamento para foil  15ml.png',
    'description':'15 ml',
    'precio':'',
    'categoria':'Complementos'});

addItem({'name':'Látex Líquido',
    'img':'../img/productos/complementos/Latex líquido (cubre cuticula) 15ml.png',
    'description':'15 ml',
    'precio':'',
    'categoria':'Complementos'});

addItem({'name':'Removedor del Gel',
    'img':'../img/productos/complementos/Removedor de Gel y acrilico 15ml.png',
    'description':'15 ml',
    'precio':'',
    'categoria':'Complementos'});