/* Variables globales */
let botonesCompra = document.querySelectorAll('.añadirCarrito');
let carrito = $('#añadido');

/* --------------------------- */

botonesCompra.forEach(agregarCarritoBoton =>{
    agregarCarritoBoton.addEventListener('click', agregarClick);
})

function agregarClick(e){
   let boton = e.target;
   let item = boton.parentNode.parentNode.parentNode
   let titulo = item.querySelector('h5').textContent;
   let imagen = item.querySelector('img').src;
   let precio = item.querySelector('#precio').textContent;

   añadirAlCarrito(titulo, imagen, precio);
}

function añadirAlCarrito(titulo,imagen,precio){
 $('#añadido').append(` <div class="container">
                <div class="row">
                    <div class="col-lg-12 col-sm-12 col-md-12">
 <table class="table table-hover">
   <tbody>
    <tr>
     <td> <div class='imgTitulo'><img src='${imagen}'> ${titulo}</div></td>
     <td><div class='precioTablaCarrito'>${precio}</div></td>
     <td></td>
     <td></td>
     <td></td>
     <td><input type='text' class='inputCantidad'></td>
     <td><button class='btnBorrarCarrito'>X</button>
   </tr>
 </tbody>
</table>
</div>
</div>
 `)

  actualizarTotal();
}

function actualizarTotal(){
    let total = 0;
    let totalHTML = document.querySelector('.totalCompra');
    let precioTabla = $('.imgTitulo');
    console.log(precioTabla);
    
 }
