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

    // KITS SPA

    addItem({'name':'Kit para pedicure (10 pz + bolsa)',
    'img':'/img/Productos/kitsSpa/KIT_PEDICURE(10Pz_Bolsa).png',
    'description':'Este set cuenta con todo lo necesario para que puedas dar un masaje de pies y prepararlos para la pedicura. El kit incluye: 1 sal mineral de 350g, 1 sal efervescente 300g, 1 exfoliante 300 g, 1 mascarilla aclaradora o refrescante, 1 lijapie, 1 bomba efervescente, 1 bio jelly spa de 90g (incluye diluyente), 1 crema hidratante, 1 ablandador de callos 60ml, 1 removedor de cuticulas 60ml, ademas de la bolsa cute!!',
    'precio':'830', 
    'categoria':'Kit',
    'id':'1'});


    //Hidratacion

    addItem({'name':'Crema hidratante 250ml aroma coco',
    'img':'/img/Productos/hidratacion/CREMA_HIDRATANTE250ML_COCO.png',
    'description':'Su formula permite una rápida absorción, contiene Complejo Vitamina E que ayuda a que la piel luzca joven y radiante. Además de dejarla hidratada, suave y con un delicioso aroma que te acompañara durante el día',
    'precio':'97',
    'categoria':'Hidratación',
    'id':'2'});

    addItem({'name':'Crema hidratante 250ml aroma cherry',
    'img':'/img/Productos/hidratacion/CREMA_HIDRATANTE250ML_CHERRY.png',
    'description':'Su formula permite una rápida absorción, contiene Complejo Vitamina E que ayuda a que la piel luzca joven y radiante. Además de dejarla hidratada, suave y con un delicioso aroma que te acompañara durante el día',
    'precio':'97',
    'categoria':'Hidratación',
    'id':'3'});

    addItem({'name':'Crema hidratante 250ml aroma pera',
    'img':'/img/Productos/hidratacion/CREMA_HIDRATANTE250ML_PERA.png',
    'description':'Su formula permite una rápida absorción, contiene Complejo Vitamina E que ayuda a que la piel luzca joven y radiante. Además de dejarla hidratada, suave y con un delicioso aroma que te acompañara durante el día',
    'precio':'97',
    'categoria':'Hidratación',
    'id':'4'});

    addItem({'name':'Crema hidratante 250ml aroma mango',
    'img':'/img/Productos/hidratacion/CREMA_HIDRATANTE250ML_MANGO.png',
    'description':'Su formula permite una rápida absorción, contiene Complejo Vitamina E que ayuda a que la piel luzca joven y radiante. Además de dejarla hidratada, suave y con un delicioso aroma que te acompañara durante el día',
    'precio':'97',
    'categoria':'Hidratación',
    'id':'5'});

    addItem({'name':'Crema hidratante 250ml aroma freesia',
    'img':'/img/Productos/hidratacion/CREMA_HIDRATANTE250ML_FREESIA.png',
    'description':'Su formula permite una rápida absorción, contiene Complejo Vitamina E que ayuda a que la piel luzca joven y radiante. Además de dejarla hidratada, suave y con un delicioso aroma que te acompañara durante el día',
    'precio':'7',
    'categoria':'Hidratación',
    'id':'6'});

    addItem({'name':'Spray Hidratante Bifasico aroma Cherry 250 ml',
    'img':'/img/Productos/hidratacion/Spray_Hidratante_BifasicoCHERRY250ml.png',
    'description':'Hidrata y brinda suavidad a la piel, humecta y es de rápida absorción, brinda una sensación ligera y suave con un delicioso aroma',
    'precio':'87',
    'categoria':'Hidratación',
    'id':'7'});

    addItem({'name':'Spray Hidratante Bifasico aroma Coco 250 ml',
    'img':'/img/Productos/hidratacion/Spray_Hidratante_Bifasico_COCO250ml.png',
    'description':'Hidrata y brinda suavidad a la piel, humecta y es de rápida absorción, brinda una sensación ligera y suave con un delicioso aroma',
    'precio':'87',
    'categoria':'Hidratación',
    'id':'8'});

    //Básicos

    addItem({'name':'Lija pie de madera para pedicure',
    'img':'/img/Productos/Basicos/lija_Pie_Pedicure_De_Madera_.png',
    'description':'De Alta calidad, ergonómica, Para todo tipo de piel, elimina callos y piel muerta, dejando tus pies suaves y tersos',
    'precio':'18',
    'categoria':'Básicos',
    'id':'9'});

    addItem({'name':'Ablandador de callosidades 60ml',
    'img':'/img/Productos/Basicos/ablandador_de_callosidades_60_ml.png',
    'description':'Líquido Ideal para eliminar callosidades y células muertas, promueve la regeneración celular revelando la mejor versión de la piel',
    'precio':'57',
    'categoria':'Básicos',
    'id':'9'});

    addItem({'name':'Ablandador de callosidades 1 litro',
    'img':'/img/Productos/Basicos/ablandador_de_callosidades_1_litro.png',
    'description':'Líquido Ideal para eliminar callosidades y células muertas, promueve la regeneración celular revelando la mejor versión de la piel',
    'precio':'490',
    'categoria':'Básicos',
    'id':'10'});

    addItem({'name':'Ablandador de callosidades galon 3,785 l',
    'img':'/img/Productos/Basicos/ablandador_de_callosidades_Galon_3,785_l.png',
    'description':'Líquido Ideal para eliminar callosidades y células muertas, promueve la regeneración celular revelando la mejor versión de la piel',
    'precio':'997',
    'categoria':'Básicos',
    'id':'11'});

    addItem({'name':'Removedor de cuticulas 60ml',
    'img':'/img/Productos/Basicos/BG_SPA_BASICOS_REMOVEDOR_DE_CUTICULA.png',
    'description':'Ayuda a reblandecer la piel muerta o dañada de las cutículas antes de retirarlas. Humecta el contorno de las uñas, deja la piel suave, además de contener emolientes y humectantes desprende fácilmente la cutícula del contorno de las uñas sin lastimarlas',
    'precio':'37',
    'categoria':'Básicos',
    'id':'12'});

    addItem({'name':'Removedor de cuticulas 1 litro',
    'img':'/img/Productos/Basicos/removedor_de_cuticulas_1_litro.png',
    'description':'Ayuda a reblandecer la piel muerta o dañada de las cutículas antes de retirarlas. Humecta el contorno de las uñas, deja la piel suave, además de contener emolientes y humectantes desprende fácilmente la cutícula del contorno de las uñas sin lastimarlas',
    'precio':'445',
    'categoria':'Básicos',
    'id':'13'});

    addItem({'name':'Removedor de cuticulas galon 3,785 l',
    'img':'/img/Productos/Basicos/removedor_de_cuticulas _Galon_3,785_l.png',
    'description':'Ayuda a reblandecer la piel muerta o dañada de las cutículas antes de retirarlas. Humecta el contorno de las uñas, deja la piel suave, además de contener emolientes y humectantes desprende fácilmente la cutícula del contorno de las uñas sin lastimarlas',
    'precio':'945',
    'categoria':'Básicos',
    'id':'14'});


    //Complementos

    addItem({'name':'Serum ácido hialurónico + vitamina c 60ml',
    'img':'/img/Productos/complementos/Sèrum Ácido Hialurónico + Vitamina C 60ml.png',
    'description':'•Detiene el avance de la onicomicosis •Contiene vitamina E, Calcio y proteína natural •Su fórmula está diluida con extracto de glicerina para una consistencia flexible. •Promueve el crecimiento de las uñas y aumenta su resistencia, ayudando a evitar su rotura •Favorece la remineralización y reestructuración de las uñas, gracias al aumento de la cantidad y calidad de silicio y keratina. •Devuelve el aspecto natural a las uñas y cutículas',
    'precio':'129',
    'categoria':'Complementos',
    'id':'15'});

    addItem({'name':'Removedor de gel y acrilico 15ml',
    'img':'/img/Productos/complementos/Removedor de Gel y acrilico 15ml.png',
    'description':'Simplemente quite el brillo, aplique suavemente, espere de 2 a 5 minutos, se vera el progreso en la superficie de la uña, luego retire suavemente la uña con un pequeño empujador de acero. Sin tedioso proceso de eliminación, sin largos tiempos de espera, ahorre tiempo',
    'precio':'45',
    'categoria':'Complementos',
    'id':'16'});

    addItem({'name':'Aceite de cuticula 15ml',
    'img':'/img/Productos/complementos/Aceite de cuticula 15ml.png',
    'description':'Hidratante especial para cutícula, con esencias aromáticas. Ideal para hidratar, nutrir y lubricar la piel del área de las cutícula',
    'precio':'21',
    'categoria':'Complementos',
    'id':'17'});

    addItem({'name':'Pegamento para foil 15ml',
    'img':'/img/Productos/complementos/Pegamento para foil  15ml.png',
    'description':'Aplicar y expandir con la brocha, el producto es de color blanco y solo hay que esperar de 60 a 90 segundos, para que este seque y al hacerlo el producto esta listo, ¿Como sabemos que ya esta listo? Es sencillo hasta que el pegamento de color blanco al aplicar, se vuelva transparente',
    'precio':'25',
    'categoria':'Complementos',
    'id':'18'});

    addItem({'name':'Latex líquido (cubre cuticula) 15ml',
    'img':'/img/Productos/complementos/Latex líquido (cubre cuticula) 15ml.png',
    'description':'Fácil de quitar y respetuoso con el medio ambiente. Aplique a las áreas que desee sin esmalte cuando esté pintando sus uñas',
    'precio':'25',
    'categoria':'Complementos',
    'id':'19'});

    //Herramientas CATEGORIA NUEVA 

    addItem({'name':'Tina para pedicure plegable',
    'img':'/img/Productos/herramientas/Tina para Pedicure Plegable.webp',
    'description':'Diseño plegable, ahorro de espacio y fácil de llevar al exterior. Lo suficientemente grueso, no es fácil de deformar. Con 4 rodillos de masaje',
    'precio':'237',
    'categoria':'Herramientas',
    'id':'20'});

    addItem({'name':'Tina para pedicure sencilla c/ rodillos',
    'img':'/img/Productos/herramientas/Tina para pedicure Sencilla c rodillos.png',
    'description':'Con un diseño moderno y forma anatómica, tiene un amplio espacio para acomodar los pies. Hecha de material altamente resistente a los productos químicos, facilita la limpieza y proporciona durabilidad, lo que permite trabajar con agua caliente o fría',
    'precio':'110',
    'categoria':'Herramientas',
    'id':'21'});

    addItem({'name':'Razor Dead Skin cuchilla removedora de piel muerta',
    'img':'/img/Productos/herramientas/Razor Dead Skin cuchilla removedora de piel muerta.jpg',
    'description':' La curva se adapta a cualquier tipo de pie siendo seguro y sin preocupaciones para el ususario. Es una Técnica 100% segura ya que no es  bisturi. Esta técnica también es conocida como técnica de raspado',
    'precio':'79',
    'categoria':'Herramientas',
    'id':'22'});

    // Sanitizante

    addItem({'name':'Sanitizer bombs (para desinfectar la tina de pedicure) 500 g (aprox 40pz)',
    'img':'/img/Productos/sanitizanteYLimpiadores/Sanitizer Bombs (para desinfectar la tina de pedicure) 500 g (aprox 40pz).png',
    'description':'Tabletas desinfectantes para tina de pedicura pedicura, ayudan a prevenir hongo, pie de atleta, etc.',
    'precio':'219',
    'categoria':'Sanitizantes y Limpiadores',
    'id':'23'});

    addItem({'name':'Shampoo espumante antibacterial aroma arandano 250 ml',
    'img':'/img/Productos/sanitizanteYLimpiadores/Shampoo_Espumante_Antibacterial_ARANDANO250ml.png',
    'description':'El shampoo espumante antibacterial es un producto muy efectivo con un agradable aroma dejando el área completamente limpia, suaves y humectada y con su protección antibacterial elimina efectivamente las bacterias causantes de múltiples enfermedades. Este shampoo es biodegradable.',
    'precio':'59',
    'categoria':'Sanitizantes y Limpiadores',
    'id':'24'});

    addItem({'name':'Shampoo espumante antibacterial aroma arandano 1 litro',
    'img':'/img/Productos/sanitizanteYLimpiadores/Shampoo_Espumante_Antibacterial_ARANDANO250ml.png',
    'description':'El shampoo espumante antibacterial es un producto muy efectivo con un agradable aroma dejando el área completamente limpia, suaves y humectada y con su protección antibacterial elimina efectivamente las bacterias causantes de múltiples enfermedades. Este shampoo es biodegradable.',
    'precio':'187',
    'categoria':'Sanitizantes y Limpiadores',
    'id':'25'});

    addItem({'name':'Sani Spray Antiseptico 250 ml',
    'img':'/img/Productos/sanitizanteYLimpiadores/SANI_SPRAY_ANTISEPTICO250ml.png',
    'description':'Solución antiséptica recomendada para la desinfección de espacios y superficies, además no produce la oxidación de herramientas por lo que también se usa para desinfectar este material.',
    'precio':'67',
    'categoria':'Sanitizantes y Limpiadores',
    'id':'26'});

    addItem({'name':'Sani Spray Antiseptico 1 litro',
    'img':'/img/Productos/sanitizanteYLimpiadores/Sani Spray Antiseptico 1 litro  .png',
    'description':'Solución antiséptica recomendada para la desinfección de espacios y superficies, además no produce la oxidación de herramientas por lo que también se usa para desinfectar este material.',
    'precio':'220',
    'categoria':'Sanitizantes y Limpiadores',
    'id':'27'});


    // Aceites para masaje

    addItem({'name':'Aceite para masaje aroma toronja 250 ml',
    'img':'/img/Productos/aceitesParaMasaje/aceite_para_masaje_TORONJA_250_ml.png',
    'description':'La toronja posee magnificas propiedades cosméticas para la piel, actúa como astringente y reafirmante. ayuda a a reafirmar el tejido. No mancha la ropa, ideal para masaje, brinda tranquilidad, descanso, alivio y relajación al cuerpo.',
    'precio':'147',
    'categoria':'Aceites para masaje',
    'id':'28'});

    addItem({'name':'Aceite para masaje aroma toronja 1 litro',
    'img':'/img/Productos/aceitesParaMasaje/aceite_para_masaje_TORONJA_1_Litro.png',
    'description':'La toronja posee magnificas propiedades cosméticas para la piel, actúa como astringente y reafirmante. ayuda a a reafirmar el tejido. No mancha la ropa, ideal para masaje, brinda tranquilidad, descanso, alivio y relajación al cuerpo.',
    'precio':'347',
    'categoria':'Aceites para masaje',
    'id':'29'});

    addItem({'name':'Aceite para masaje aroma almendras dulces 250 ml',
    'img':'/img/Productos/aceitesParaMasaje/aceite_para_masaje_ALMENDRAS_DULCES_250_ml.png',
    'description':'Suaviza y proporciona elasticidad a la piel, evita la resequedad de la misma. Tiene efectos emolientes, suaviza y protege la piel.',
    'precio':'147',
    'categoria':'Aceites para masaje',
    'id':'30'});

    addItem({'name':'Aceite para masaje aroma almendras dulces 1 litro',
    'img':'/img/Productos/aceitesParaMasaje/aceite_para_masaje_ALMENDRAS_DULCES_1_Litro.png',
    'description':'Suaviza y proporciona elasticidad a la piel, evita la resequedad de la misma. Tiene efectos emolientes, suaviza y protege la piel.',
    'precio':'347',
    'categoria':'Aceites para masaje',
    'id':'31'});


    //Locion refrescante NUEVA CATEGORIA
    
    addItem({'name':'Locion refrescante para pies 250 ml',
    'img':'/img/Productos/locionRefrescante/LOCION_REFRESCANTE_PIES.png',
    'description':'La crema refrescante para pies es un tratamiento auxiliar para piernas y pies cansados. Brinda una sensación de frescura y relajación, suaviza e hidrata la piel. Excelente auxiliar desinflamatorio que activa la circulación en combinación con el masaje. Contiene alcanfor y mentol, desinflamatorio, refrescante, aromatizante y agente antimicrobiano.',
    'precio':'77',
    'categoria':'Lociones',
    'id':'32'});

    addItem({'name':'Locion refrescante para pies 1 litro',
    'img':'/img/Productos/locionRefrescante/Locion Refrescante para Pies 1 Litro  .png',
    'description':'La crema refrescante para pies es un tratamiento auxiliar para piernas y pies cansados. Brinda una sensación de frescura y relajación, suaviza e hidrata la piel. Excelente auxiliar desinflamatorio que activa la circulación en combinación con el masaje. Contiene alcanfor y mentol, desinflamatorio, refrescante, aromatizante y agente antimicrobiano.',
    'precio':'231',
    'categoria':'Lociones',
    'id':'33'});

    //Mascarillas

    addItem({'name':'Fade Mask (aclarante) té verde y sándalo 300 g',
    'img':'/img/Productos/Mascarillas/MASCARILLA_TE_VERDE_SANDALO.png',
    'description':'Mascarilla nutritiva a base de arcilla blanca, contiene sándalo que es un antienvejecimiento, nos ayuda a reducir marcas de la piel como las cicatrices. Y Té verde que Rejuvenece las células de la piel, ayuda a desin-amar la piel. Limpiando a profundidad regenerando las células de la superficie y estimulando la renovación de estas.',
    'precio':'165',
    'categoria':'Mascarillas',
    'id':'34'});

    addItem({'name':'Fresh Mask (refrescante) mentol y hierbabuena 300g',
    'img':'/img/Productos/Mascarillas/MASCARILLA_MENTOL_HIERBABUENA.png',
    'description':'Elimina las células muertas, las impurezas y el exceso de grasa. · Es refrescante y deja la piel limpia, la revitaliza, suaviza, hidrata y nutre. · Regula el exceso de grasa en la piel. La mascarilla Mentol-Hierbabuena ayuda a eliminar células muertas e impurezas y a regular el exceso de grasa cutánea, dejando la piel profundamente limpia, revitalizada, suave e hidratada.',
    'precio':'165',
    'categoria':'Mascarillas',
    'id':'35'});

    // Exfoliantes

    addItem({'name':'Berry Scrub exfoliante profundo de frutos rojos 300 g',
    'img':'/img/Productos/Exfoliante/EXFOLIANTE_FRUTOS_ROJOS.png',
    'description':'Exfoliante profundo con ingredientes naturales. Beneficios desintoxicantes, vitamina C, antioxidantes y vitamina E. Con partículas exfoliantes que ayuda a eliminar la piel dañada, las células muertas y las imperfecciones revelando el mejor estado de la piel, sus aceites ayudan a blanquear la piel.',
    'precio':'165',
    'categoria':'Exfoliantes',
    'id':'36'});

    addItem({'name':'Honey Scrub exfoliante oleoso de miel-avena 300 g',
    'img':'/img/Productos/Exfoliante/EXFOLIANTE_MIEL_AVENA.png',
    'description':'Ayudan a retirar células muertas dejando una piel más clara y aportando una apariencia más tersa y suave. Avena elimina la piel muerta y deja una piel radiante. Es un gran exfoliante para el cuerpo que sólo contiene ingredientes naturales, dejando la piel más fresca. Ingredientes de exfoliación suave, elimina la suciedad de la piel y tiene el doble efecto de hidratar y suavizar la piel.',
    'precio':'165',
    'categoria':'Exfoliantes',
    'id':'37'});

    //Bio Jelly Spa

    addItem({'name':'Bio Jelly Spa 90g. Tropical',
    'img':'/img/Productos/bioJellySpa/BIO JELLY SPA 90g. TROPICAL .png',
    'description':'Producto libre de químicos o conservantes dañinos para la piel y es totalmente biodegradable. En sus beneficios destaca una hidratación profunda para la piel. Activa la circulación sanguínea. Desinflama tus pies. Relaja músculos. Suaviza la piel. Exfolia ligeramente. Elimina toxinas que se encuentran en nuestro cuerpo.',
    'precio':'79',
    'categoria':'Bio Jelly Spa',
    'id':'38'});

    addItem({'name':'Bio Jelly Spa 90g. Té Verde',
    'img':'/img/Productos/bioJellySpa/BIO JELLY SPA 90g. TÉ VERDE.png',
    'description':'Producto libre de químicos o conservantes dañinos para la piel y es totalmente biodegradable. En sus beneficios destaca una hidratación profunda para la piel. Activa la circulación sanguínea. Desinflama tus pies. Relaja músculos. Suaviza la piel. Exfolia ligeramente. Elimina toxinas que se encuentran en nuestro cuerpo.',
    'precio':'79',
    'categoria':'Bio Jelly Spa',
    'id':'39'});

    addItem({'name':'Bio Jelly Spa 90g. Coconut',
    'img':'/img/Productos/bioJellySpa/BIO JELLY SPA 90g. COCONUT.png',
    'description':'Producto libre de químicos o conservantes dañinos para la piel y es totalmente biodegradable. En sus beneficios destaca una hidratación profunda para la piel. Activa la circulación sanguínea. Desinflama tus pies. Relaja músculos. Suaviza la piel. Exfolia ligeramente. Elimina toxinas que se encuentran en nuestro cuerpo.',
    'precio':'79',
    'categoria':'Bio Jelly Spa',
    'id':'40'});

    addItem({'name':'Bio Jelly Spa 90g. Flowers',
    'img':'/img/Productos/bioJellySpa/BIO JELLY SPA 1 kg. TROPICAL.png',
    'description':'Producto libre de químicos o conservantes dañinos para la piel y es totalmente biodegradable. En sus beneficios destaca una hidratación profunda para la piel. Activa la circulación sanguínea. Desinflama tus pies. Relaja músculos. Suaviza la piel. Exfolia ligeramente. Elimina toxinas que se encuentran en nuestro cuerpo.',
    'precio':'79',
    'categoria':'Bio Jelly Spa',
    'id':'41'});

    addItem({'name':'Bio Jelly Spa 90g. Menta',
    'img':'/img/Productos/bioJellySpa/BIO JELLY SPA 90g. MENTA.png',
    'description':'Producto libre de químicos o conservantes dañinos para la piel y es totalmente biodegradable. En sus beneficios destaca una hidratación profunda para la piel. Activa la circulación sanguínea. Desinflama tus pies. Relaja músculos. Suaviza la piel. Exfolia ligeramente. Elimina toxinas que se encuentran en nuestro cuerpo.',
    'precio':'79',
    'categoria':'Bio Jelly Spa',
    'id':'42'});

    addItem({'name':'Bio Jelly Spa 90g. Limón',
    'img':'/img/Productos/bioJellySpa/BIO JELLY SPA 90g. LIMÓN.png',
    'description':'Producto libre de químicos o conservantes dañinos para la piel y es totalmente biodegradable. En sus beneficios destaca una hidratación profunda para la piel. Activa la circulación sanguínea. Desinflama tus pies. Relaja músculos. Suaviza la piel. Exfolia ligeramente. Elimina toxinas que se encuentran en nuestro cuerpo.',
    'precio':'79',
    'categoria':'Bio Jelly Spa',
    'id':'43'});

    addItem({'name':'Bio Jelly Spa 90g. Naranja',
    'img':'/img/Productos/bioJellySpa/BIO JELLY SPA 90g. NARANJA.png',
    'description':'Producto libre de químicos o conservantes dañinos para la piel y es totalmente biodegradable. En sus beneficios destaca una hidratación profunda para la piel. Activa la circulación sanguínea. Desinflama tus pies. Relaja músculos. Suaviza la piel. Exfolia ligeramente. Elimina toxinas que se encuentran en nuestro cuerpo.',
    'precio':'79',
    'categoria':'Bio Jelly Spa',
    'id':'44'});

    addItem({'name':'Bio Jelly Spa 90g. Lavanda',
    'img':'/img/Productos/bioJellySpa/BIO JELLY SPA 90g. LAVANDA.png',
    'description':'Producto libre de químicos o conservantes dañinos para la piel y es totalmente biodegradable. En sus beneficios destaca una hidratación profunda para la piel. Activa la circulación sanguínea. Desinflama tus pies. Relaja músculos. Suaviza la piel. Exfolia ligeramente. Elimina toxinas que se encuentran en nuestro cuerpo.',
    'precio':'79',
    'categoria':'Bio Jelly Spa',
    'id':'45'});

    addItem({'name':'Bio Jelly Spa 500g. Tropical',
    'img':'/img/Productos/bioJellySpa/BIO JELLY SPA 500g. TROPICAL.png',
    'description':'Producto libre de químicos o conservantes dañinos para la piel y es totalmente biodegradable. En sus beneficios destaca una hidratación profunda para la piel. Activa la circulación sanguínea. Desinflama tus pies. Relaja músculos. Suaviza la piel. Exfolia ligeramente. Elimina toxinas que se encuentran en nuestro cuerpo.',
    'precio':'245',
    'categoria':'Bio Jelly Spa',
    'id':'46'});

    addItem({'name':'Bio Jelly Spa 500g. Té Verde',
    'img':'/img/Productos/bioJellySpa/BIO JELLY SPA 90g. TÉ VERDE.png',
    'description':'Producto libre de químicos o conservantes dañinos para la piel y es totalmente biodegradable. En sus beneficios destaca una hidratación profunda para la piel. Activa la circulación sanguínea. Desinflama tus pies. Relaja músculos. Suaviza la piel. Exfolia ligeramente. Elimina toxinas que se encuentran en nuestro cuerpo.',
    'precio':'245',
    'categoria':'Bio Jelly Spa',
    'id':'47'});

    addItem({'name':'Bio Jelly Spa 500g. Coconut',
    'img':'/img/Productos/bioJellySpa/BIO JELLY SPA 500g. COCONUT.png',
    'description':'Producto libre de químicos o conservantes dañinos para la piel y es totalmente biodegradable. En sus beneficios destaca una hidratación profunda para la piel. Activa la circulación sanguínea. Desinflama tus pies. Relaja músculos. Suaviza la piel. Exfolia ligeramente. Elimina toxinas que se encuentran en nuestro cuerpo.',
    'precio':'245',
    'categoria':'Bio Jelly Spa',
    'id':'48'});

    addItem({'name':'Bio Jelly Spa 500g. Flowers',
    'img':'/img/Productos/bioJellySpa/BIO JELLY SPA 500g. FLOWERS.png',
    'description':'Producto libre de químicos o conservantes dañinos para la piel y es totalmente biodegradable. En sus beneficios destaca una hidratación profunda para la piel. Activa la circulación sanguínea. Desinflama tus pies. Relaja músculos. Suaviza la piel. Exfolia ligeramente. Elimina toxinas que se encuentran en nuestro cuerpo.',
    'precio':'245',
    'categoria':'Bio Jelly Spa',
    'id':'49'});

    addItem({'name':'Bio Jelly Spa 500g. Menta',
    'img':'/img/Productos/bioJellySpa/BIO JELLY SPA 500g. MENTA.png',
    'description':'Producto libre de químicos o conservantes dañinos para la piel y es totalmente biodegradable. En sus beneficios destaca una hidratación profunda para la piel. Activa la circulación sanguínea. Desinflama tus pies. Relaja músculos. Suaviza la piel. Exfolia ligeramente. Elimina toxinas que se encuentran en nuestro cuerpo.',
    'precio':'245',
    'categoria':'Bio Jelly Spa',
    'id':'50'});

    addItem({'name':'Bio Jelly Spa 500g. Limón',
    'img':'/img/Productos/bioJellySpa/BIO JELLY SPA 500g. LIMÓN.png',
    'description':'Producto libre de químicos o conservantes dañinos para la piel y es totalmente biodegradable. En sus beneficios destaca una hidratación profunda para la piel. Activa la circulación sanguínea. Desinflama tus pies. Relaja músculos. Suaviza la piel. Exfolia ligeramente. Elimina toxinas que se encuentran en nuestro cuerpo.',
    'precio':'245',
    'categoria':'Bio Jelly Spa',
    'id':'51'});

    addItem({'name':'Bio Jelly Spa 500g. Naranja',
    'img':'/img/Productos/bioJellySpa/BIO JELLY SPA 500g. NARANJA.png',
    'description':'Producto libre de químicos o conservantes dañinos para la piel y es totalmente biodegradable. En sus beneficios destaca una hidratación profunda para la piel. Activa la circulación sanguínea. Desinflama tus pies. Relaja músculos. Suaviza la piel. Exfolia ligeramente. Elimina toxinas que se encuentran en nuestro cuerpo.',
    'precio':'245',
    'categoria':'Bio Jelly Spa',
    'id':'52'});

    addItem({'name':'Bio Jelly Spa 500g. Lavanda',
    'img':'/img/Productos/bioJellySpa/BIO JELLY SPA 500g. LAVANDA.png',
    'description':'Producto libre de químicos o conservantes dañinos para la piel y es totalmente biodegradable. En sus beneficios destaca una hidratación profunda para la piel. Activa la circulación sanguínea. Desinflama tus pies. Relaja músculos. Suaviza la piel. Exfolia ligeramente. Elimina toxinas que se encuentran en nuestro cuerpo.',
    'precio':'245',
    'categoria':'Bio Jelly Spa',
    'id':'53'});


