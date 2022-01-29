let toggleDark = document.querySelector('.darkMode');
let toggleLight = document.querySelector('.lightMode');
let cambiarTema = (e) =>{
  if(e.target.checked){
    document.documentElement.setAttribute('data-theme', 'oscuro');
    console.log(e.target.checked);

  }else{
    DocumentTimeline.documentElement.setAttribute('data-theme', null);
  }
}

let temaActual = localStorage.getItem('tema');

function darkMode(){
  localStorage.setItem('tema', 'oscuro')

    document.body.style.background = 'black';

    /* Color título carrito */   
    $('#tituloCarritoNav').css('color', 'black');
     
    /* Fondo carrito */
    $('#carritoCompras').css('background-color', 'grey');
    
    $('.añadirCarrito').css('background-color', 'grey');

    $('#productos').css('background-color', 'black');
  
    /* filtros */
    $('.categorias').css('color', 'white');
    
    /* titulo filtrado */
    $('.tituloFiltrar').css('color', 'white');

    $('.tituloProductos').css('color', 'white');
    
    /* fondo carrito */
    $('.carritoHTML').css('background-color', 'grey');

    /* titulo TOTAL carrito */
    $('#tituloTotal').css('color', 'white');

    $('.totalCompra').css('color', 'white');
    
    /* CARD VERSIÓN OSCURA */
    $('.card').css('background-color', 'black');
    $('.card').css('border', '7px solid beige');
    /* nombre card */
    $('.nombreProducto').css('color', 'beige');
    /* precio card */
    $('.precio').css('color', 'beige')

    $('.categorias').css('color', 'beige');

  }
  
  function lightMode(){
    localStorage.setItem('tema', 'claro')

     $('.body').css('background-image', 'linear-gradient(to top, beige, white)');
    
    /* Color título carrito */
    $('#tituloCarritoNav').css('color', 'black');
     
    /* Fondo carrito */
    $('#carritoCompras').css('background-color', 'white');

    $('.categorias').css('color', 'black');
    
    /* titulo de filtrado */
    $('.tituloFiltrar').css('color', 'black');
     
    /* lista productos index */
    $('#productos').css('background-color', 'white');

    $('.tituloProductos').css('color', 'black');

    /* fondo carrito */
    $('.carritoHTML').css('background-color', 'beige');

     /* titulo TOTAL carrito */
     $('#tituloTotal').css('color', 'grey');

     $('.totalCompra').css('color', 'grey');

     /* CARD VERSIÓN CLARA */
    $('.card').css('background-color', '#fff');
    $('.card').css('border', '7px solid rgba(207, 206, 118, 0.466)');
    /* nombre card */
    $('.nombreProducto').css('color', 'black');
    /* precio card */
    $('.precio').css('color', 'black')
/* boton añadir al carrito */
    $('.añadirCarrito').css('background-color', 'black');
  }

