function darkMode(){
    document.body.style.background = 'black';

    /* Color título carrito */
    $('#tituloCarritoNav').css('color', 'black');
     
    /* Fondo carrito */
    $('#carritoCompras').css('background-color', 'grey');
    
    let navBar = document.getElementsByTagName('nav');
    navBar.style.background = 'black';
  
  }
  
  function lightMode(){
      document.body.style.background = 'beige';
    
    /* Color título carrito */
    $('#tituloCarritoNav').css('color', 'black');
     
    /* Fondo carrito */
    $('#carritoCompras').css('background-color', 'white');
  }

