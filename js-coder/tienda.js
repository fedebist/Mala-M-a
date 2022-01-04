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
 $('#añadido').append(` <div class="container carritoItems">
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
     <td><input type='number' value="1" class='inputCantidad'></td>
     <td><button class='btnBorrarCarrito'>X</button>
   </tr>
 </tbody>
</table>
</div>
</div>
 `)

 /* Identificar botones de borrado */
 let carroItems = document.querySelectorAll('.carritoItems');
 carroItems.forEach(itemCarro=>{
  let botonBorrar = itemCarro.querySelector('.btnBorrarCarrito').addEventListener('click', borrarItem);
  /* Cambiar de cantidad y actualizar precio */
  let botonCantidad = itemCarro.querySelector('.inputCantidad')
 .addEventListener('change', cantidadChange);
});

  actualizarTotal();
}

function actualizarTotal(){
    let total = 0;
    let totalHTML = document.querySelector('.totalCompra');
    /* seleccionar items del carrito dinámico */
    let carroItems = document.querySelectorAll('.carritoItems');
    carroItems.forEach(itemCarro=>{
     let precioItemCarrito = itemCarro.querySelector('.precioTablaCarrito');
     /* generar sólo el valor contenido en el div. Reemplazar signo $ por string vacío */
     let precioItemCarritoContent = Number(precioItemCarrito.textContent.replace
        ('$', ''));
        /* Cantidad de productos */
        let cantidadCarrito = itemCarro.querySelector('.inputCantidad');
        let cantidadCarritoContent = Number(cantidadCarrito.value);
        /* suma y multiplicación, total * cantidad */
        total= total + precioItemCarritoContent * cantidadCarritoContent;
        console.log(total);
        /* agregar total en HTML */
        totalHTML.innerHTML = `$${total.toFixed(2)}`
        

    })
    
 }

 /* Borrar item correspondiente al botón de eliminar */
 function borrarItem(e){
  let botonClickeado= e.target;
  botonClickeado.closest('.carritoItems').remove();
  /* actualizar el total al borrar */
  actualizarTotal();
 }

 function cantidadChange(e){
    let cambio = e.target;
    /* si input es menor o igual a 0, pasar a 1 */
    if(cambio.value <=0){
      cambio.value = 1;
    }
    actualizarTotal();
 }