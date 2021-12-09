function darkMode(){
    document.body.style.background = 'black';
    
    let navBar = document.getElementsByTagName('nav');
    navBar.style.background = 'black';
  
    let carrito = document.getElementById('carritoCompras');
    carrito.style.background = 'black';
  }
  
  function lightMode(){
      document.body.style.background = 'beige';
      let carro = document.getElementsByClassName('carrito');
      carrito.style.background = '#798177';
      
      let carrito = document.querySelector('.tituloCarritoNav')
      carrito.style.background = 'red';
  }

