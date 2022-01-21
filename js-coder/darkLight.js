function darkMode(){
    document.body.style.background = 'black';

    /* Color título carrito */
    $('#tituloCarritoNav').css('color', 'black');
     
    /* Fondo carrito */
    $('#carritoCompras').css('background-color', 'grey');
    
    let navBar = document.getElementsByTagName('nav');
    navBar.style.background = 'black';

    $('.añadirCarrito').css('background-color', 'grey');

    $('#productos').css('background-color', 'black');
  
  }
  
  function lightMode(){
      document.body.style.background = 'beige';
    
    /* Color título carrito */
    $('#tituloCarritoNav').css('color', 'black');
     
    /* Fondo carrito */
    $('#carritoCompras').css('background-color', 'white');
  }

