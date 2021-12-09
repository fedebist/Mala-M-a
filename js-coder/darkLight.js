function darkMode(){
    document.body.style.background = 'black';
    let carro = document.getElementsByClassName('carrito');
    carrito.style.background = 'grey';
    
    let navBar = document.getElementsByTagName('nav');
    navBar.style.background = 'black';
  
    let tituloCarrito = document.getElementsByClassName('tituloCarritoNav');
    tituloCarritoNav.style.background = 'white';
  }
  
  function lightMode(){
      document.body.style.background = 'beige';
      let carro = document.getElementsByClassName('carrito');
      carrito.style.background = '#798177';
      
      let carrito = document.querySelector('.tituloCarritoNav')
      carrito.style.background = 'red';
  }

