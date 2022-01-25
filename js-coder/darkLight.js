function darkMode(){
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
  }
  
  function lightMode(){
      document.body.style.background = 'beige';
    
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
  }

