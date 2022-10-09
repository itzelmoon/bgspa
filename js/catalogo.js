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
let check14 = document.getElementById("customCheck14");


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
check14.addEventListener("click", filtrar);

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
        case "Hidratación":
            c="hidra"
            break;
        case "Exfoliantes":
            c="exfo";
            break;
        case "Lociones":
            c="loci";
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
        case "Herramientas":
            c="herra";
            break;
        default:
            c="all";
            break;
    }//switch
    return c;
}//getClassCategory


  // Aceites para masaje

  addItem({'name':'Aceite para masaje aroma toronja 250 ml',
  'img':'/img/Productos/aceitesParaMasaje/aceite_para_masaje_TORONJA_250_ml.png',
  'description':'La toronja posee magnificas propiedades cosméticas para la piel, actúa como astringente y reafirmante. Ayuda a reafirmar el tejido. No mancha la ropa, ideal para masaje, brinda tranquilidad, descanso, alivio y relajación al cuerpo.',
  'precio':'147',
  'categoria':'Aceites para masaje',
  'SKU':'ACT',
  'id':'1'});

  addItem({'name':'Aceite para masaje aroma toronja 1 litro',
  'img':'/img/Productos/aceitesParaMasaje/aceite_para_masaje_TORONJA_1_Litro.png',
  'description':'La toronja posee magnificas propiedades cosméticas para la piel, actúa como astringente y reafirmante. Ayuda a reafirmar el tejido. No mancha la ropa, ideal para masaje, brinda tranquilidad, descanso, alivio y relajación al cuerpo.',
  'precio':'347',
  'categoria':'Aceites para masaje',
  'SKU':'ACT1L',
  'id':'2'});

  addItem({'name':'Aceite para masaje aroma almendras dulces 250 ml',
  'img':'/img/Productos/aceitesParaMasaje/aceite_para_masaje_ALMENDRAS_DULCES_250_ml.png',
  'description':'Suaviza y proporciona elasticidad a la piel, evita la resequedad de la misma. Tiene efectos emolientes, suaviza y protege la piel.',
  'precio':'147',
  'categoria':'Aceites para masaje',
  'SKU':'ACA',
  'id':'3'});

  addItem({'name':'Aceite para masaje aroma almendras dulces 1 litro',
  'img':'/img/Productos/aceitesParaMasaje/aceite_para_masaje_ALMENDRAS_DULCES_1_Litro.png',
  'description':'Suaviza y proporciona elasticidad a la piel, evita la resequedad de la misma. Tiene efectos emolientes, suaviza y protege la piel.',
  'precio':'347',
  'categoria':'Aceites para masaje',
  'SKU':'ACA1L',
  'id':'4'});


   //Básicos

   addItem({'name':'Lija pie de madera para pedicure',
  'img':'/img/Productos/Basicos/lija_Pie_Pedicure_De_Madera_.png',
  'description':'De alta calidad, ergonómica, para todo tipo de piel; elimina callos y piel muerta, dejando tus pies suaves y tersos.',
  'precio':'18',
  'categoria':'Básicos',
  'SKU':'LPIE',
  'id':'5'});

   addItem({'name':'Ablandador de callosidades 60ml',
   'img':'/img/Productos/Basicos/ablandador_de_callosidades_60_ml.png',
   'description':'Líquido ideal para eliminar callosidades y células muertas, promueve la regeneración celular revelando la mejor versión de la piel.',
   'precio':'57',
   'categoria':'Básicos',
   'SKU':'AC60',
   'id':'6'});

   addItem({'name':'Ablandador de callosidades 1 litro',
   'img':'/img/Productos/Basicos/ablandador_de_callosidades_1_litro.png',
   'description':'Líquido ideal para eliminar callosidades y células muertas, promueve la regeneración celular revelando la mejor versión de la piel.',
   'precio':'490',
   'categoria':'Básicos',
   'SKU':'AC1L',
   'id':'7'});

   addItem({'name':'Ablandador de callosidades galón 3,785 l',
   'img':'/img/Productos/Basicos/ablandador_de_callosidades_Galon_3,785_l.png',
   'description':'Líquido ideal para eliminar callosidades y células muertas, promueve la regeneración celular revelando la mejor versión de la piel.',
   'precio':'997',
   'categoria':'Básicos',
   'SKU':'ACGL',
   'id':'8'});

   addItem({'name':'Removedor de cutículas 60ml',
   'img':'/img/Productos/Basicos/BG_SPA_BASICOS_REMOVEDOR_DE_CUTICULA.png',
   'description':'Ayuda a reblandecer la piel muerta o dañada de las cutículas antes de retirarlas. Humecta el contorno de las uñas, deja la piel suave, además de contener emolientes y humectantes desprende fácilmente la cutícula del contorno de las uñas sin lastimarlas.',
   'precio':'37',
   'categoria':'Básicos',
   'SKU':'RC60',
   'id':'9'});

   addItem({'name':'Removedor de cutículas 1 litro',
   'img':'/img/Productos/Basicos/removedor_de_cuticulas_1_litro.png',
   'description':'Ayuda a reblandecer la piel muerta o dañada de las cutículas antes de retirarlas. Humecta el contorno de las uñas, deja la piel suave, además de contener emolientes y humectantes desprende fácilmente la cutícula del contorno de las uñas sin lastimarlas.',
   'precio':'445',
   'categoria':'Básicos',
   'SKU':'RC1L',
   'id':'10'});

   addItem({'name':'Removedor de cutículas galón 3,785 l',
   'img':'/img/Productos/Basicos/removedor_de_cuticulas _Galon_3,785_l.png',
   'description':'Ayuda a reblandecer la piel muerta o dañada de las cutículas antes de retirarlas. Humecta el contorno de las uñas, deja la piel suave, además de contener emolientes y humectantes desprende fácilmente la cutícula del contorno de las uñas sin lastimarlas.',
   'precio':'945',
   'categoria':'Básicos',
   'SKU':'RCGL',
   'id':'11'});


     //Bio Jelly Spa

     addItem({'name':'Bio Jelly Spa 90g. Tropical',
     'img':'/img/Productos/bioJellySpa/BIO JELLY SPA 90g. TROPICAL .png',
     'description':'Producto libre de químicos o conservantes dañinos para la piel y es totalmente biodegradable. En sus beneficios destaca una hidratación profunda para la piel, activa la circulación sanguínea, desinflama tus pies, relaja músculos, suaviza la piel, exfolia ligeramente y elimina toxinas que se encuentran en nuestro cuerpo.',
     'precio':'79',
     'categoria':'Bio Jelly Spa',
     'SKU':'JTR',
     'id':'12'});
 
     addItem({'name':'Bio Jelly Spa 90g. Té Verde',
     'img':'/img/Productos/bioJellySpa/BIO JELLY SPA 90g. TÉ VERDE.png',
     'description':'Producto libre de químicos o conservantes dañinos para la piel y es totalmente biodegradable. En sus beneficios destaca una hidratación profunda para la piel, activa la circulación sanguínea, desinflama tus pies, relaja músculos, suaviza la piel, exfolia ligeramente y elimina toxinas que se encuentran en nuestro cuerpo.',
     'precio':'79',
     'categoria':'Bio Jelly Spa',
     'SKU':'JTE',
     'id':'13'});
 
     addItem({'name':'Bio Jelly Spa 90g. Coconut',
     'img':'/img/Productos/bioJellySpa/BIO JELLY SPA 90g. COCONUT.png',
     'description':'Producto libre de químicos o conservantes dañinos para la piel y es totalmente biodegradable. En sus beneficios destaca una hidratación profunda para la piel, activa la circulación sanguínea, desinflama tus pies, relaja músculos, suaviza la piel, exfolia ligeramente y elimina toxinas que se encuentran en nuestro cuerpo.',
     'precio':'79',
     'categoria':'Bio Jelly Spa',
     'SKU':'JC',
     'id':'14'});
 
     addItem({'name':'Bio Jelly Spa 90g. Flowers',
     'img':'/img/Productos/bioJellySpa/BIO JELLY SPA 1 kg. TROPICAL.png',
     'description':'Producto libre de químicos o conservantes dañinos para la piel y es totalmente biodegradable. En sus beneficios destaca una hidratación profunda para la piel, activa la circulación sanguínea, desinflama tus pies, relaja músculos, suaviza la piel, exfolia ligeramente y elimina toxinas que se encuentran en nuestro cuerpo.',
     'precio':'79',
     'categoria':'Bio Jelly Spa',
     'SKU':'JF',
     'id':'15'});
 
     addItem({'name':'Bio Jelly Spa 90g. Menta',
     'img':'/img/Productos/bioJellySpa/BIO JELLY SPA 90g. MENTA.png',
     'description':'Producto libre de químicos o conservantes dañinos para la piel y es totalmente biodegradable. En sus beneficios destaca una hidratación profunda para la piel, activa la circulación sanguínea, desinflama tus pies, relaja músculos, suaviza la piel, exfolia ligeramente y elimina toxinas que se encuentran en nuestro cuerpo.',
     'precio':'79',
     'categoria':'Bio Jelly Spa',
     'SKU':'JM',
     'id':'16'});
 
     addItem({'name':'Bio Jelly Spa 90g. Limón',
     'img':'/img/Productos/bioJellySpa/BIO JELLY SPA 90g. LIMÓN.png',
     'description':'Producto libre de químicos o conservantes dañinos para la piel y es totalmente biodegradable. En sus beneficios destaca una hidratación profunda para la piel, activa la circulación sanguínea, desinflama tus pies, relaja músculos, suaviza la piel, exfolia ligeramente y elimina toxinas que se encuentran en nuestro cuerpo.',    
     'precio':'79',
     'categoria':'Bio Jelly Spa',
     'SKU':'JLI',
     'id':'17'});
 
     addItem({'name':'Bio Jelly Spa 90g. Naranja',
     'img':'/img/Productos/bioJellySpa/BIO JELLY SPA 90g. NARANJA.png',
     'description':'Producto libre de químicos o conservantes dañinos para la piel y es totalmente biodegradable. En sus beneficios destaca una hidratación profunda para la piel, activa la circulación sanguínea, desinflama tus pies, relaja músculos, suaviza la piel, exfolia ligeramente y elimina toxinas que se encuentran en nuestro cuerpo.',    
     'precio':'79',
     'categoria':'Bio Jelly Spa',
     'SKU':'JN',
     'id':'18'});
 
     addItem({'name':'Bio Jelly Spa 90g. Lavanda',
     'img':'/img/Productos/bioJellySpa/BIO JELLY SPA 90g. LAVANDA.png',
     'description':'Producto libre de químicos o conservantes dañinos para la piel y es totalmente biodegradable. En sus beneficios destaca una hidratación profunda para la piel, activa la circulación sanguínea, desinflama tus pies, relaja músculos, suaviza la piel, exfolia ligeramente y elimina toxinas que se encuentran en nuestro cuerpo.',    
     'precio':'79',
     'categoria':'Bio Jelly Spa',
     'SKU':'JLA',
     'id':'19'});
 
     addItem({'name':'Bio Jelly Spa 500g. Tropical',
     'img':'/img/Productos/bioJellySpa/BIO JELLY SPA 500g. TROPICAL.png',
     'description':'Producto libre de químicos o conservantes dañinos para la piel y es totalmente biodegradable. En sus beneficios destaca una hidratación profunda para la piel, activa la circulación sanguínea, desinflama tus pies, relaja músculos, suaviza la piel, exfolia ligeramente y elimina toxinas que se encuentran en nuestro cuerpo.',    
     'precio':'245',
     'categoria':'Bio Jelly Spa',
     'SKU':'JMTR',
     'id':'20'});
 
     addItem({'name':'Bio Jelly Spa 500g. Té Verde',
     'img':'/img/Productos/bioJellySpa/BIO JELLY SPA 90g. TÉ VERDE.png',
     'description':'Producto libre de químicos o conservantes dañinos para la piel y es totalmente biodegradable. En sus beneficios destaca una hidratación profunda para la piel, activa la circulación sanguínea, desinflama tus pies, relaja músculos, suaviza la piel, exfolia ligeramente y elimina toxinas que se encuentran en nuestro cuerpo.',    
     'precio':'245',
     'categoria':'Bio Jelly Spa',
     'SKU':'JMTE',
     'id':'21'});
 
     addItem({'name':'Bio Jelly Spa 500g. Coconut',
     'img':'/img/Productos/bioJellySpa/BIO JELLY SPA 500g. COCONUT.png',
     'description':'Producto libre de químicos o conservantes dañinos para la piel y es totalmente biodegradable. En sus beneficios destaca una hidratación profunda para la piel, activa la circulación sanguínea, desinflama tus pies, relaja músculos, suaviza la piel, exfolia ligeramente y elimina toxinas que se encuentran en nuestro cuerpo.',    
     'precio':'245',
     'categoria':'Bio Jelly Spa',
     'SKU':'JMC',
     'id':'22'});
 
     addItem({'name':'Bio Jelly Spa 500g. Flowers',
     'img':'/img/Productos/bioJellySpa/BIO JELLY SPA 500g. FLOWERS.png',
     'description':'Producto libre de químicos o conservantes dañinos para la piel y es totalmente biodegradable. En sus beneficios destaca una hidratación profunda para la piel, activa la circulación sanguínea, desinflama tus pies, relaja músculos, suaviza la piel, exfolia ligeramente y elimina toxinas que se encuentran en nuestro cuerpo.',    
     'precio':'245',
     'categoria':'Bio Jelly Spa',
     'SKU':'JMF',
     'id':'23'});
 
     addItem({'name':'Bio Jelly Spa 500g. Menta',
     'img':'/img/Productos/bioJellySpa/BIO JELLY SPA 500g. MENTA.png',
     'description':'Producto libre de químicos o conservantes dañinos para la piel y es totalmente biodegradable. En sus beneficios destaca una hidratación profunda para la piel, activa la circulación sanguínea, desinflama tus pies, relaja músculos, suaviza la piel, exfolia ligeramente y elimina toxinas que se encuentran en nuestro cuerpo.',    
     'precio':'245',
     'categoria':'Bio Jelly Spa',
     'SKU':'JMM',
     'id':'24'});
 
     addItem({'name':'Bio Jelly Spa 500g. Limón',
     'img':'/img/Productos/bioJellySpa/BIO JELLY SPA 500g. LIMÓN.png',
     'description':'Producto libre de químicos o conservantes dañinos para la piel y es totalmente biodegradable. En sus beneficios destaca una hidratación profunda para la piel, activa la circulación sanguínea, desinflama tus pies, relaja músculos, suaviza la piel, exfolia ligeramente y elimina toxinas que se encuentran en nuestro cuerpo.',    
     'precio':'245',
     'categoria':'Bio Jelly Spa',
     'SKU':'JMLI',
     'id':'25'});
 
     addItem({'name':'Bio Jelly Spa 500g. Naranja',
     'img':'/img/Productos/bioJellySpa/BIO JELLY SPA 500g. NARANJA.png',
     'description':'Producto libre de químicos o conservantes dañinos para la piel y es totalmente biodegradable. En sus beneficios destaca una hidratación profunda para la piel, activa la circulación sanguínea, desinflama tus pies, relaja músculos, suaviza la piel, exfolia ligeramente y elimina toxinas que se encuentran en nuestro cuerpo.',    
     'precio':'245',
     'categoria':'Bio Jelly Spa',
     'SKU':'JMN',
     'id':'26'});
 
     addItem({'name':'Bio Jelly Spa 500g. Lavanda',
     'img':'/img/Productos/bioJellySpa/BIO JELLY SPA 500g. LAVANDA.png',
     'description':'Producto libre de químicos o conservantes dañinos para la piel y es totalmente biodegradable. En sus beneficios destaca una hidratación profunda para la piel, activa la circulación sanguínea, desinflama tus pies, relaja músculos, suaviza la piel, exfolia ligeramente y elimina toxinas que se encuentran en nuestro cuerpo.',    
     'precio':'245',
     'categoria':'Bio Jelly Spa',
     'SKU':'JMLA',
     'id':'27'});
 
     addItem({'name':'Bio Jelly Spa 1 Kg. Tropical',
     'img':'/img/Productos/bioJellySpa/BIO JELLY SPA 1 kg. TROPICAL.png',
     'description':'Producto libre de químicos o conservantes dañinos para la piel y es totalmente biodegradable. En sus beneficios destaca una hidratación profunda para la piel, activa la circulación sanguínea, desinflama tus pies, relaja músculos, suaviza la piel, exfolia ligeramente y elimina toxinas que se encuentran en nuestro cuerpo.',    
     'precio':'450',
     'categoria':'Bio Jelly Spa',
     'SKU':'JKTR',
     'id':'28'});
 
     addItem({'name':'Bio Jelly Spa 1 Kg. Té Verde',
     'img':'/img/Productos/bioJellySpa/BIO JELLY SPA 1 kg. TÉ VERDE.png',
     'description':'Producto libre de químicos o conservantes dañinos para la piel y es totalmente biodegradable. En sus beneficios destaca una hidratación profunda para la piel, activa la circulación sanguínea, desinflama tus pies, relaja músculos, suaviza la piel, exfolia ligeramente y elimina toxinas que se encuentran en nuestro cuerpo.',    
     'precio':'450',
     'categoria':'Bio Jelly Spa',
     'SKU':'JKTE',
     'id':'29'});
 
     addItem({'name':'Bio Jelly Spa 1 Kg. Coconut',
     'img':'/img/Productos/bioJellySpa/BIO JELLY SPA 1 kg. COCONUT.png',
     'description':'Producto libre de químicos o conservantes dañinos para la piel y es totalmente biodegradable. En sus beneficios destaca una hidratación profunda para la piel, activa la circulación sanguínea, desinflama tus pies, relaja músculos, suaviza la piel, exfolia ligeramente y elimina toxinas que se encuentran en nuestro cuerpo.',    
     'precio':'450',
     'categoria':'Bio Jelly Spa',
     'SKU':'JKC',
     'id':'30'});
 
     addItem({'name':'Bio Jelly Spa 1 Kg. Flowers',
     'img':'/img/Productos/bioJellySpa/BIO JELLY SPA 1 kg. FLOWERS.png',
     'description':'Producto libre de químicos o conservantes dañinos para la piel y es totalmente biodegradable. En sus beneficios destaca una hidratación profunda para la piel, activa la circulación sanguínea, desinflama tus pies, relaja músculos, suaviza la piel, exfolia ligeramente y elimina toxinas que se encuentran en nuestro cuerpo.',    
     'precio':'450',
     'categoria':'Bio Jelly Spa',
     'SKU':'JKF',
     'id':'31'});
 
     addItem({'name':'Bio Jelly Spa 1 Kg. Menta',
     'img':'/img/Productos/bioJellySpa/BIO JELLY SPA 1 kg. MENTA.png',
     'description':'Producto libre de químicos o conservantes dañinos para la piel y es totalmente biodegradable. En sus beneficios destaca una hidratación profunda para la piel. Activa la circulación sanguínea. Desinflama tus pies. Relaja músculos. Suaviza la piel. Exfolia ligeramente. Elimina toxinas que se encuentran en nuestro cuerpo.',
     'precio':'450',
     'categoria':'Bio Jelly Spa',
     'SKU':'JKM',
     'id':'32'});
 
     addItem({'name':'Bio Jelly Spa 1 Kg. Limón',
     'img':'/img/Productos/bioJellySpa/BIO JELLY SPA 1 kg. LIMÓN.png',
     'description':'Producto libre de químicos o conservantes dañinos para la piel y es totalmente biodegradable. En sus beneficios destaca una hidratación profunda para la piel, activa la circulación sanguínea, desinflama tus pies, relaja músculos, suaviza la piel, exfolia ligeramente y elimina toxinas que se encuentran en nuestro cuerpo.',    
     'precio':'450',
     'categoria':'Bio Jelly Spa',
     'SKU':'JKLI',
     'id':'33'});
 
     addItem({'name':'Bio Jelly Spa 1 Kg. Naranja',
     'img':'/img/Productos/bioJellySpa/BIO JELLY SPA 1 kg. NARANJA.png',
     'description':'Producto libre de químicos o conservantes dañinos para la piel y es totalmente biodegradable. En sus beneficios destaca una hidratación profunda para la piel, activa la circulación sanguínea, desinflama tus pies, relaja músculos, suaviza la piel, exfolia ligeramente y elimina toxinas que se encuentran en nuestro cuerpo.',    
     'precio':'450',
     'categoria':'Bio Jelly Spa',
     'SKU':'JKN',
     'id':'33'});
 
     addItem({'name':'Bio Jelly Spa 1 Kg. Lavanda',
     'img':'/img/Productos/bioJellySpa/BIO JELLY SPA 1 kg. LAVANDA.png',
     'description':'Producto libre de químicos o conservantes dañinos para la piel y es totalmente biodegradable. En sus beneficios destaca una hidratación profunda para la piel, activa la circulación sanguínea, desinflama tus pies, relaja músculos, suaviza la piel, exfolia ligeramente y elimina toxinas que se encuentran en nuestro cuerpo.',    
     'precio':'450',
     'categoria':'Bio Jelly Spa',
     'SKU':'JKLA',
     'id':'35'});
 
     // Bombas Efervescentes 
 
     addItem({'name':'Docena Bath bombs Colección RAINBOW BOMBS (Bomba de baño efervescente)',
     'img':'/img/Productos/bombasEfervescentes/BOMBAS_EFERVESCENTES_RAINBOW.png',
     'description':'Al sumergirlas generan un efecto relajante, terapéutico y lleno de nutrientes para la piel. Además, son libres de parabenos, aceites minerales, sulfatos, colorantes artificiales o cualquier derivado del petróleo. Después según el aroma y aceites esenciales que posean, tendrán unas propiedades específicas.',
     'precio':'  197',
     'categoria':'Bombas Efervescentes',
     'SKU':'12BER',
     'id':'36'});
 
     addItem({'name':'Docena Bath bombs Colección GEMNSTONE (Bomba de baño efervescente)',
     'img':'/img/Productos/bombasEfervescentes/BOMBAS_EFERVESCENTES_GEMSTONE.png',
     'description':'Al sumergirlas generan un efecto relajante, terapéutico y lleno de nutrientes para la piel. Además, son libres de parabenos, aceites minerales, sulfatos, colorantes artificiales o cualquier derivado del petróleo. Después según el aroma y aceites esenciales que posean, tendrán unas propiedades específicas.',
     'precio':'  197',
     'categoria':'Bombas Efervescentes',
     'SKU':'12BEG',
     'id':'37'});
 
     addItem({'name':'Docena Bath bombs Colección HEALING (Bomba de baño efervescente)',
     'img':'/img/Productos/bombasEfervescentes/BOMBAS_EFERVESCENTES_HEALING.png',
     'description':'Al sumergirlas generan un efecto relajante, terapéutico y lleno de nutrientes para la piel. Además, son libres de parabenos, aceites minerales, sulfatos, colorantes artificiales o cualquier derivado del petróleo. Después según el aroma y aceites esenciales que posean, tendrán unas propiedades específicas.',
     'precio':'  197',
     'categoria':'Bombas Efervescentes',
     'SKU':'12BEH',
     'id':'38'});
 
     addItem({'name':'Bath bomb individual (Bomba de baño efervescente)',
     'img':'/img/Productos/bombasEfervescentes/BATH BOMB INDIVIDUAL (Bomba de baño efervescente).png',
     'description':'Al sumergirlas generan un efecto relajante, terapéutico y lleno de nutrientes para la piel. Además, son libres de parabenos, aceites minerales, sulfatos, colorantes artificiales o cualquier derivado del petróleo. Después según el aroma y aceites esenciales que posean, tendrán unas propiedades específicas.',
     'precio':'  18',
     'categoria':'Bombas Efervescentes',
     'SKU':'BE',
     'id':'39'});

   
    //Complementos

    addItem({'name':'Serum ácido hialurónico + vitamina c 60ml',
    'img':'/img/Productos/complementos/Sèrum Ácido Hialurónico + Vitamina C 60ml.png',
    'description':'Detiene el avance de la onicomicosis, contiene vitamina E, calcio y proteína natural, su fórmula está diluida con extracto de glicerina para una consistencia flexible, promueve el crecimiento de las uñas y aumenta su resistencia, ayudando a evitar su rotura, favorece la remineralización y reestructuración de las uñas; gracias al aumento de la cantidad y calidad de silicio y keratina, devuelve el aspecto natural a las uñas y cutículas.',
    'precio':'129',
    'categoria':'Complementos',
    'SKU':'SEAH',
    'id':'40'});

    addItem({'name':'Removedor de gel y acrílico 15ml',
    'img':'/img/Productos/complementos/Removedor de Gel y acrilico 15ml.png',
    'description':'Simplemente quite el brillo, aplique suavemente, espere de 2 a 5 minutos, se verá el progreso en la superficie de la uña, luego retire suavemente la uña con un pequeño empujador de acero. Sin tedioso proceso de eliminación, sin largos tiempos de espera, ahorre tiempo.',
    'precio':'45',
    'categoria':'Complementos',
    'SKU':'RGA',
    'id':'41'});

    addItem({'name':'Aceite de cutícula 15ml',
    'img':'/img/Productos/complementos/Aceite de cuticula 15ml.png',
    'description':'Hidratante especial para cutícula, con esencias aromáticas. Ideal para hidratar, nutrir y lubricar la piel del área de la cutícula.',
    'precio':'21',
    'categoria':'Complementos',
    'SKU':'AC',
    'id':'42'});

    addItem({'name':'Pegamento para foil 15ml',
    'img':'/img/Productos/complementos/Pegamento para foil  15ml.png',
    'description':'Aplicar y expandir con la brocha, el producto es de color blanco y solo hay que esperar de 60 a 90 segundos, para que este seque y al hacerlo el producto está listo, ¿Cómo sabemos que ya está listo? Es sencillo hasta que el pegamento de color blanco al aplicar se vuelva transparente.',
    'precio':'25',
    'categoria':'Complementos',
    'SKU':'PF',
    'id':'43'});

    addItem({'name':'Latex líquido (cubre cutícula) 15ml',
    'img':'/img/Productos/complementos/Latex líquido (cubre cuticula) 15ml.png',
    'description':'Fácil de quitar y respetuoso con el medio ambiente. Aplique a las áreas que desee sin esmalte cuando esté pintando sus uñas.',
    'precio':'25',
    'categoria':'Complementos',
    'SKU':'LXL',
    'id':'44'});

     // Exfoliantes

     addItem({'name':'Berry Scrub exfoliante profundo de frutos rojos 300 g',
     'img':'/img/Productos/Exfoliante/EXFOLIANTE_FRUTOS_ROJOS.png',
     'description':'Exfoliante profundo con ingredientes naturales. Beneficios desintoxicantes, vitamina C, antioxidantes y vitamina E. Con partículas exfoliantes que ayuda a eliminar la piel dañada, las células muertas y las imperfecciones revelando el mejor estado de la piel, sus aceites ayudan a blanquear la piel.',
     'precio':'165',
     'categoria':'Exfoliantes',
     'SKU':'EXFR',
     'id':'45'});
 
     addItem({'name':'Honey Scrub exfoliante oleoso de miel-avena 300 g',
     'img':'/img/Productos/Exfoliante/EXFOLIANTE_MIEL_AVENA.png',
     'description':'Ayudan a retirar células muertas dejando una piel más clara y aportando una apariencia más tersa y suave. La avena elimina la piel muerta y deja una piel radiante. Es un gran exfoliante para el cuerpo que sólo contiene ingredientes naturales, dejando la piel más fresca. Ingredientes de exfoliación suave, elimina la suciedad de la piel y tiene el doble efecto de hidratar y suavizar la piel.',
     'precio':'165',
     'categoria':'Exfoliantes',
     'SKU':'EXMI',
     'id':'46'});
 

    //Herramientas 

    addItem({'name':'Tina para pedicure plegable',
    'img':'/img/Productos/herramientas/Tina para Pedicure Plegable.webp',
    'description':'Diseño plegable, ahorro de espacio y fácil de llevar al exterior. Lo suficientemente grueso, no es fácil de deformar. Con 4 rodillos de masaje',
    'precio':'237',
    'categoria':'Herramientas',
    'SKU':'TP',
    'id':'47'});

    addItem({'name':'Tina para pedicure sencilla c/ rodillos',
    'img':'/img/Productos/herramientas/Tina para pedicure Sencilla c rodillos.png',
    'description':'Con un diseño moderno y forma anatómica, tiene un amplio espacio para acomodar los pies. Hecha de material altamente resistente a los productos químicos, facilita la limpieza y proporciona durabilidad, lo que permite trabajar con agua caliente o fría.',
    'precio':'110',
    'categoria':'Herramientas',
    'SKU':'TINA',
    'id':'48'});

    addItem({'name':'Razor Dead Skin cuchilla removedora de piel muerta',
    'img':'/img/Productos/herramientas/Razor Dead Skin cuchilla removedora de piel muerta.jpg',
    'description':'La curva se adapta a cualquier tipo de pie siendo seguro y sin preocupaciones para el usuario. Es una técnica 100% segura ya que no es bisturí. Esta técnica también es conocida como técnica de raspado.',
    'precio':'79',
    'categoria':'Herramientas',
    'SKU':'RDS',
    'id':'49'});

        //Hidratacion

        addItem({'name':'Crema hidratante 250ml aroma coco',
        'img':'/img/Productos/hidratacion/CREMA_HIDRATANTE250ML_COCO.png',
        'description':'Su fórmula permite una rápida absorción, contiene Complejo Vitamina E que ayuda a que la piel luzca joven y radiante. Además de dejarla hidratada, suave y con un delicioso aroma que te acompañara durante el día.',
        'precio':'97',
        'categoria':'Hidratación',
        'SKU':'CRCO',
        'id':'50'});
    
        addItem({'name':'Crema hidratante 250ml aroma cherry',
        'img':'/img/Productos/hidratacion/CREMA_HIDRATANTE250ML_CHERRY.png',
        'description':'Su fórmula permite una rápida absorción, contiene Complejo Vitamina E que ayuda a que la piel luzca joven y radiante. Además de dejarla hidratada, suave y con un delicioso aroma que te acompañara durante el día.',
        'precio':'97',
        'categoria':'Hidratación',
        'SKU':'CRC',
        'id':'51'});
    
        addItem({'name':'Crema hidratante 250ml aroma pera',
        'img':'/img/Productos/hidratacion/CREMA_HIDRATANTE250ML_PERA.png',
        'description':'Su fórmula permite una rápida absorción, contiene Complejo Vitamina E que ayuda a que la piel luzca joven y radiante. Además de dejarla hidratada, suave y con un delicioso aroma que te acompañara durante el día.',
        'precio':'97',
        'categoria':'Hidratación',
        'SKU':'CRP',
        'id':'52'});
    
        addItem({'name':'Crema hidratante 250ml aroma mango',
        'img':'/img/Productos/hidratacion/CREMA_HIDRATANTE250ML_MANGO.png',
        'description':'Su fórmula permite una rápida absorción, contiene Complejo Vitamina E que ayuda a que la piel luzca joven y radiante. Además de dejarla hidratada, suave y con un delicioso aroma que te acompañara durante el día.',
        'precio':'97',
        'categoria':'Hidratación',
        'SKU':'CRM',
        'id':'53'});
    
        addItem({'name':'Crema hidratante 250ml aroma freesia',
        'img':'/img/Productos/hidratacion/CREMA_HIDRATANTE250ML_FREESIA.png',
        'description':'Su fórmula permite una rápida absorción, contiene Complejo Vitamina E que ayuda a que la piel luzca joven y radiante. Además de dejarla hidratada, suave y con un delicioso aroma que te acompañara durante el día.',
        'precio':'7',
        'categoria':'Hidratación',
        'SKU':'CRF',
        'id':'54'});
    
        addItem({'name':'Spray hidratante bifásico aroma Cherry 250 ml.',
        'img':'/img/Productos/hidratacion/Spray_Hidratante_BifasicoCHERRY250ml.png',
        'description':'Hidrata y brinda suavidad a la piel, humecta y es de rápida absorción, brinda una sensación ligera y suave con un delicioso aroma.',
        'precio':'87',
        'categoria':'Hidratación',
        'SKU':'SHCH',
        'id':'55'});
    
        addItem({'name':'Spray hidratante bifásico aroma Coco 250 ml.',
        'img':'/img/Productos/hidratacion/Spray_Hidratante_Bifasico_COCO250ml.png',
        'description':'Hidrata y brinda suavidad a la piel, humecta y es de rápida absorción, brinda una sensación ligera y suave con un delicioso aroma.',
        'precio':'87',
        'categoria':'Hidratación',
        'SKU':'SHCO',
        'id':'56'});
    
        // KITS SPA
    
        addItem({'name':'Kit para pedicure (10 pzas + bolsa))',
        'img':'/img/Productos/kitsSpa/KIT_PEDICURE(10Pz_Bolsa).png',
        'description':'Este set cuenta con todo lo necesario para que puedas dar un masaje de pies y prepararlos para la pedicura. El kit incluye: 1 sal mineral de 350g, 1 sal efervescente 300g, 1 exfoliante 300 g, 1 mascarilla aclaradora o refrescante, 1 lija pie, 1 bomba efervescente, 1 bio jelly spa de 90g (incluye diluyente), 1 crema hidratante, 1 ablandador de callos 60ml, 1 removedor de cutículas 60ml, además de la bolsa cute.',
        'precio':'830', 
        'categoria':'Kit',
        'SKU':'BGKIT',
        'id':'57'});

            //Locion refrescante NUEVA CATEGORIA
    
    addItem({'name':'Loción refrescante para pies 250 ml',
    'img':'/img/Productos/locionRefrescante/LOCION_REFRESCANTE_PIES.png',
    'description':'La crema refrescante para pies es un tratamiento auxiliar para piernas y pies cansados. Brinda una sensación de frescura y relajación, suaviza e hidrata la piel. Excelente auxiliar desinflamatorio que activa la circulación en combinación con el masaje. Contiene alcanfor y mentol, desinflamatorio, refrescante, aromatizante y agente antimicrobiano.',
    'precio':'77',
    'categoria':'Lociones',
    'SKU':'LRP',
    'id':'58'});

    addItem({'name':'Loción refrescante para pies 1 litro',
    'img':'/img/Productos/locionRefrescante/Locion Refrescante para Pies 1 Litro  .png',
    'description':'La crema refrescante para pies es un tratamiento auxiliar para piernas y pies cansados. Brinda una sensación de frescura y relajación, suaviza e hidrata la piel. Excelente auxiliar desinflamatorio que activa la circulación en combinación con el masaje. Contiene alcanfor y mentol, desinflamatorio, refrescante, aromatizante y agente antimicrobiano.',
    'precio':'231',
    'categoria':'Lociones',
    'SKU':'LRP1L',
    'id':'59'});

    //Mascarillas

    addItem({'name':'Fade Mask (aclarante) té verde y sándalo 300 g',
    'img':'/img/Productos/Mascarillas/MASCARILLA_TE_VERDE_SANDALO.png',
    'description':'Mascarilla nutritiva a base de arcilla blanca, contiene sándalo que es un antienvejecimiento, nos ayuda a reducir marcas de la piel como las cicatrices y té verde que rejuvenece las células de la piel, ayuda a desinflamar la piel. Limpiando a profundidad regenerando las células de la superficie y estimulando la renovación de estas.',
    'precio':'165',
    'categoria':'Mascarillas',
    'SKU':'MTV',
    'id':'60'});

    addItem({'name':'Fresh Mask (refrescante) mentol y hierbabuena 300g',
    'img':'/img/Productos/Mascarillas/MASCARILLA_MENTOL_HIERBABUENA.png',
    'description':'Elimina las células muertas, las impurezas y el exceso de grasa. Es refrescante y deja la piel limpia, la revitaliza, suaviza, hidrata y nutre. Regula el exceso de grasa en la piel.La mascarilla Mentol-Hierbabuena ayuda a eliminar células muertas e impurezas y a regular el exceso de grasa cutánea, dejando la piel profundamente limpia, revitalizada, suave e hidratada.',
    'precio':'165',
    'categoria':'Mascarillas',
    'SKU':'MMH',
    'id':'61'});

     // Sales Efervescentes

     addItem({'name':'Sales efervescentes aroma Menta 300 g.',
     'img':'/img/Productos/salesEfervescente/SALES_EFERVESCENTES_MENTA.png',
     'description':'Especialmente indicadas para pies y manos secas, pies agrietados, reduce las cutículas ásperas, el mal olor de pies, sudor, infecciones, picazón en los pies y alivia el cansancio en los pies. Sales minerales efervescentes ideales para manicure y pedicure, estas están hechas a base de ingredientes naturales. Nos ayuda a blanquear la piel y eliminar ligeras manchas e imperfecciones.',
     'precio':'  79',
     'categoria':'Sales Efervescentes',
     'SKU':'SEM',
     'id':'62'});
 
     addItem({'name':'Sales efervescentes aroma piña & coco 300 g.',
     'img':'/img/Productos/salesEfervescente/SALES_EFERVESCENTES_PIÑACOCO.png',
     'description':'Especialmente indicadas para pies y manos secas, pies agrietados, reduce las cutículas ásperas, el mal olor de pies, sudor, infecciones, picazón en los pies y alivia el cansancio en los pies. Sales minerales efervescentes ideales para manicure y pedicure, estas están hechas a base de ingredientes naturales. Nos ayuda a blanquear la piel y eliminar ligeras manchas e imperfecciones.',
     'precio':'  79',
     'categoria':'Sales Efervescentes',
     'SKU':'SEP',
     'id':'63'}); 
 
     addItem({'name':'Sales efervescentes aroma Mix&Match (Tutti Frutti) 300 g',
     'img':'/img/Productos/salesEfervescente/SALES_EFERVESCENTES_MIX_MATCH.png',
     'description':'Especialmente indicadas para pies y manos secas, pies agrietados, reduce las cutículas ásperas, el mal olor de pies, sudor, infecciones, picazón en los pies y alivia el cansancio en los pies. Sales minerales efervescentes ideales para manicure y pedicure, estas están hechas a base de ingredientes naturales. Nos ayuda a blanquear la piel y eliminar ligeras manchas e imperfecciones.',
     'precio':'  79',
     'categoria':'Sales Efervescentes',
     'SKU':'SETF',
     'id':'64'}); 

     

    //Sales Minerales

    addItem({'name':'Mineral Tuzlar Sales minerales aroma canela 350 g.',
    'img':'/img/Productos/salesMinerales/SALES_MINERALES350g_CANELA.png',
    'description':'Las sales minerales BG SPA contiene elementos químicos naturales. Estos elementos de forma natural tienen beneficiosos efectos sobre nuestro cuerpo, entre otros son cicatrizantes y ayudan a eliminar toxinas, combaten el reuma y suavizan la piel. Los baños con sales minerales son relajantes. Alivian los dolores musculares y desintoxican la piel. También contiene aceites esenciales y extractos naturales para exfoliar suavemente, hidratar y dejar la piel con una sensación sedosa y suave.',    
    'precio':'  59',
    'categoria':'Sales Minerales',
    'SKU':'MTCA',
    'id':'65'}); 

    addItem({'name':'Mineral Tuzlar Sales minerales aroma menta 350 g.',
    'img':'/img/Productos/salesMinerales/SALES_MINERALES350g_MENTA.png',
    'description':'Las sales minerales BG SPA contiene elementos químicos naturales. Estos elementos de forma natural tienen beneficiosos efectos sobre nuestro cuerpo, entre otros son cicatrizantes y ayudan a eliminar toxinas, combaten el reuma y suavizan la piel. Los baños con sales minerales son relajantes. Alivian los dolores musculares y desintoxican la piel. También contiene aceites esenciales y extractos naturales para exfoliar suavemente, hidratar y dejar la piel con una sensación sedosa y suave.',    
    'precio':'  59',
    'categoria':'Sales Minerales',
    'SKU':'MTM',
    'id':'66'}); 

    addItem({'name':'Mineral Tuzlar Sales minerales aroma lavanda 350 g.',
    'img':'/img/Productos/salesMinerales/SALES_MINERALES350g_LAVANDA.png',
    'description':'Las sales minerales BG SPA contiene elementos químicos naturales. Estos elementos de forma natural tienen beneficiosos efectos sobre nuestro cuerpo, entre otros son cicatrizantes y ayudan a eliminar toxinas, combaten el reuma y suavizan la piel. Los baños con sales minerales son relajantes. Alivian los dolores musculares y desintoxican la piel. También contiene aceites esenciales y extractos naturales para exfoliar suavemente, hidratar y dejar la piel con una sensación sedosa y suave.',    
    'precio':'  59',
    'categoria':'Sales Minerales',
    'SKU':'MTL',
    'id':'67'}); 

    addItem({'name':'Mineral Tuzlar Sales minerales aroma citricos  350 g.',
    'img':'/img/Productos/salesMinerales/SALES_MINERALES350g_CITRICOS.png',
    'description':'Las sales minerales BG SPA contiene elementos químicos naturales. Estos elementos de forma natural tienen beneficiosos efectos sobre nuestro cuerpo, entre otros son cicatrizantes y ayudan a eliminar toxinas, combaten el reuma y suavizan la piel. Los baños con sales minerales son relajantes. Alivian los dolores musculares y desintoxican la piel. También contiene aceites esenciales y extractos naturales para exfoliar suavemente, hidratar y dejar la piel con una sensación sedosa y suave.',    
    'precio':'59',
    'categoria':'Sales Minerales',
    'SKU':'MTCI',
    'id':'68'}); 

    addItem({'name':'Mineral Tuzlar Sales minerales aroma piña-coco 350 g.',
    'img':'/img/Productos/salesMinerales/SALES_MINERALES350g_PIÑACOCO.png',
    'description':'Las sales minerales BG SPA contiene elementos químicos naturales. Estos elementos de forma natural tienen beneficiosos efectos sobre nuestro cuerpo, entre otros son cicatrizantes y ayudan a eliminar toxinas, combaten el reuma y suavizan la piel. Los baños con sales minerales son relajantes. Alivian los dolores musculares y desintoxican la piel. También contiene aceites esenciales y extractos naturales para exfoliar suavemente, hidratar y dejar la piel con una sensación sedosa y suave.',    
    'precio':'59',
    'categoria':'Sales Minerales',
    'SKU':'MTP',
    'id':'69'}); 
    
    addItem({'name':'Mineral Tuzlar Sales minerales aroma canela 500g.',
    'img':'/img/Productos/salesMinerales/SALES_MINERALES350g_CANELA.png',
    'description':'Las sales minerales BG SPA contiene elementos químicos naturales. Estos elementos de forma natural tienen beneficiosos efectos sobre nuestro cuerpo, entre otros son cicatrizantes y ayudan a eliminar toxinas, combaten el reuma y suavizan la piel. Los baños con sales minerales son relajantes. Alivian los dolores musculares y desintoxican la piel. También contiene aceites esenciales y extractos naturales para exfoliar suavemente, hidratar y dejar la piel con una sensación sedosa y suave.',    
    'precio':'95',
    'categoria':'Sales Minerales',
    'SKU':'MTMCA',
    'id':'70'}); 
    
    addItem({'name':'Mineral Tuzlar Sales minerales aroma menta 500g.',
    'img':'/img/Productos/salesMinerales/SALES_MINERALES500G_MENTA.png',
    'description':'Las sales minerales BG SPA contiene elementos químicos naturales. Estos elementos de forma natural tienen beneficiosos efectos sobre nuestro cuerpo, entre otros son cicatrizantes y ayudan a eliminar toxinas, combaten el reuma y suavizan la piel. Los baños con sales minerales son relajantes. Alivian los dolores musculares y desintoxican la piel. También contiene aceites esenciales y extractos naturales para exfoliar suavemente, hidratar y dejar la piel con una sensación sedosa y suave.',    
    'precio':'95',
    'categoria':'Sales Minerales',
    'SKU':'MTMM',
    'id':'71'}); 

    addItem({'name':'Mineral Tuzlar Sales minerales aroma lavanda 500g.',
    'img':'/img/Productos/salesMinerales/SALES_MINERALES500G_LAVANDA.png',
    'description':'Las sales minerales BG SPA contiene elementos químicos naturales. Estos elementos de forma natural tienen beneficiosos efectos sobre nuestro cuerpo, entre otros son cicatrizantes y ayudan a eliminar toxinas, combaten el reuma y suavizan la piel. Los baños con sales minerales son relajantes. Alivian los dolores musculares y desintoxican la piel. También contiene aceites esenciales y extractos naturales para exfoliar suavemente, hidratar y dejar la piel con una sensación sedosa y suave.',    
    'precio':'95',
    'categoria':'Sales Minerales',
    'SKU':'MTML',
    'id':'72'}); 

    addItem({'name':'Mineral Tuzlar Sales minerales aroma citricos 500g.',
    'img':'/img/Productos/salesMinerales/SALES_MINERALES500G_CITRICOS.png',
    'description':'Las sales minerales BG SPA contiene elementos químicos naturales. Estos elementos de forma natural tienen beneficiosos efectos sobre nuestro cuerpo, entre otros son cicatrizantes y ayudan a eliminar toxinas, combaten el reuma y suavizan la piel. Los baños con sales minerales son relajantes. Alivian los dolores musculares y desintoxican la piel. También contiene aceites esenciales y extractos naturales para exfoliar suavemente, hidratar y dejar la piel con una sensación sedosa y suave.',    
    'precio':'95',
    'categoria':'Sales Minerales',
    'SKU':'MTMCI',
    'id':'73'}); 

    addItem({'name':'Mineral Tuzlar Sales minerales aroma piña-coco 500g.',
    'img':'/img/Productos/salesMinerales/SALES_MINERALES500G_PIÑACOCO.png',
    'description':'Las sales minerales BG SPA contiene elementos químicos naturales. Estos elementos de forma natural tienen beneficiosos efectos sobre nuestro cuerpo, entre otros son cicatrizantes y ayudan a eliminar toxinas, combaten el reuma y suavizan la piel. Los baños con sales minerales son relajantes. Alivian los dolores musculares y desintoxican la piel. También contiene aceites esenciales y extractos naturales para exfoliar suavemente, hidratar y dejar la piel con una sensación sedosa y suave.',    
    'precio':'95',
    'categoria':'Sales Minerales',
    'SKU':'MTMP',
    'id':'74'}); 

    addItem({'name':'Mineral Tuzlar Sales minerales aroma canela 1 kg.',
    'img':'/img/Productos/salesMinerales/SALES_MINERALES1KG_CANELA.png',
    'description':'Las sales minerales BG SPA contiene elementos químicos naturales. Estos elementos de forma natural tienen beneficiosos efectos sobre nuestro cuerpo, entre otros son cicatrizantes y ayudan a eliminar toxinas, combaten el reuma y suavizan la piel. Los baños con sales minerales son relajantes. Alivian los dolores musculares y desintoxican la piel. También contiene aceites esenciales y extractos naturales para exfoliar suavemente, hidratar y dejar la piel con una sensación sedosa y suave.',    
    'precio':'169',
    'categoria':'Sales Minerales',
    'SKU':'MT1CA',
    'id':'75'}); 

    addItem({'name':'Mineral Tuzlar Sales minerales aroma menta 1 kg.',
    'img':'/img/Productos/salesMinerales/SALES_MINERALES1KG_MENTA.png',
    'description':'Las sales minerales BG SPA contiene elementos químicos naturales. Estos elementos de forma natural tienen beneficiosos efectos sobre nuestro cuerpo, entre otros son cicatrizantes y ayudan a eliminar toxinas, combaten el reuma y suavizan la piel. Los baños con sales minerales son relajantes. Alivian los dolores musculares y desintoxican la piel. También contiene aceites esenciales y extractos naturales para exfoliar suavemente, hidratar y dejar la piel con una sensación sedosa y suave.',    
    'precio':'169',
    'categoria':'Sales Minerales',
    'SKU':'MT1M',
    'id':'76'});

    addItem({'name':'Mineral Tuzlar Sales minerales aroma lavanda 1 kg.',
    'img':'/img/Productos/salesMinerales/SALES_MINERALES1KG_LAVANDA.png',
    'description':'Las sales minerales BG SPA contiene elementos químicos naturales. Estos elementos de forma natural tienen beneficiosos efectos sobre nuestro cuerpo, entre otros son cicatrizantes y ayudan a eliminar toxinas, combaten el reuma y suavizan la piel. Los baños con sales minerales son relajantes. Alivian los dolores musculares y desintoxican la piel. También contiene aceites esenciales y extractos naturales para exfoliar suavemente, hidratar y dejar la piel con una sensación sedosa y suave.',    
    'precio':'169',
    'categoria':'Sales Minerales',
    'SKU':'MT1L',
    'id':'77'});

    addItem({'name':'Mineral Tuzlar Sales minerales aroma citricos  1 kg.',
    'img':'/img/Productos/salesMinerales/SALES_MINERALES1KG_CITRICOS.png',
    'description':'Las sales minerales BG SPA contiene elementos químicos naturales. Estos elementos de forma natural tienen beneficiosos efectos sobre nuestro cuerpo, entre otros son cicatrizantes y ayudan a eliminar toxinas, combaten el reuma y suavizan la piel. Los baños con sales minerales son relajantes. Alivian los dolores musculares y desintoxican la piel. También contiene aceites esenciales y extractos naturales para exfoliar suavemente, hidratar y dejar la piel con una sensación sedosa y suave.',    
    'precio':'169',
    'categoria':'Sales Minerales',
    'SKU':'MT1C1',
    'id':'78'});

    addItem({'name':'Mineral Tuzlar Sales minerales aroma piña-coco 1 kg.',
    'img':'/img/Productos/salesMinerales/SALES_MINERALES_1KG_PIÑACOCO.png',
    'description':'Las sales minerales BG SPA contiene elementos químicos naturales. Estos elementos de forma natural tienen beneficiosos efectos sobre nuestro cuerpo, entre otros son cicatrizantes y ayudan a eliminar toxinas, combaten el reuma y suavizan la piel. Los baños con sales minerales son relajantes. Alivian los dolores musculares y desintoxican la piel. También contiene aceites esenciales y extractos naturales para exfoliar suavemente, hidratar y dejar la piel con una sensación sedosa y suave.',    
    'precio':'169',
    'categoria':'Sales Minerales',
    'SKU':'MT1P',
    'id':'79'});
    
    // Sanitizante

    addItem({'name':'Sanitizer bombs (para desinfectar la tina de pedicure) 500 g (aprox. 40pz)',
    'img':'/img/Productos/sanitizanteYLimpiadores/Sanitizer Bombs (para desinfectar la tina de pedicure) 500 g (aprox 40pz).png',
    'description':'Tabletas desinfectantes para tina de pedicura, ayudan a prevenir hongo, pie de atleta, etc.',
    'precio':'219',
    'categoria':'Sanitizantes y Limpiadores',
    'SKU':'BES',
    'id':'80'});

    addItem({'name':'Shampoo espumante antibacterial aroma arándano 250 ml',
    'img':'/img/Productos/sanitizanteYLimpiadores/Shampoo_Espumante_Antibacterial_ARANDANO250ml.png',
    'description':'El shampoo espumante antibacterial es un producto muy efectivo con un agradable aroma dejando el área completamente limpia, suave y humectada con su protección antibacterial elimina efectivamente las bacterias causantes de múltiples enfermedades. Este shampoo es biodegradable.',
    'precio':'59',
    'categoria':'Sanitizantes y Limpiadores',
    'SKU':'SEAA',
    'id':'81'});

    addItem({'name':'Shampoo espumante antibacterial aroma arándano 1 litro',
    'img':'/img/Productos/sanitizanteYLimpiadores/Shampoo_Espumante_Antibacterial_ARANDANO250ml.png',
    'description':'El shampoo espumante antibacterial es un producto muy efectivo con un agradable aroma dejando el área completamente limpia, suaves y humectada y con su protección antibacterial elimina efectivamente las bacterias causantes de múltiples enfermedades. Este shampoo es biodegradable.',
    'precio':'187',
    'categoria':'Sanitizantes y Limpiadores',
    'SKU':'SEA1L',
    'id':'82'});

    addItem({'name':'Sani spray antiséptico 250 ml',
    'img':'/img/Productos/sanitizanteYLimpiadores/SANI_SPRAY_ANTISEPTICO250ml.png',
    'description':'Solución antiséptica recomendada para la desinfección de espacios y superficies, además no produce la oxidación de herramientas por lo que también se usa para desinfectar este material.',
    'precio':'67',
    'categoria':'Sanitizantes y Limpiadores',
    'SKU':'SSA',
    'id':'83'});

    addItem({'name':'Sani spray antiséptico 1 litro',
    'img':'/img/Productos/sanitizanteYLimpiadores/Sani Spray Antiseptico 1 litro  .png',
    'description':'Solución antiséptica recomendada para la desinfección de espacios y superficies, además no produce la oxidación de herramientas por lo que también se usa para desinfectar este material.',
    'precio':'220',
    'categoria':'Sanitizantes y Limpiadores',
    'SKU':'SA1L',
    'id':'84'});


  



    

   
   

   