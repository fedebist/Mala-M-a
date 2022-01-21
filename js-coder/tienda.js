/* Variables globales */
let botonesCompra = document.querySelectorAll('.añadirCarrito');
let carrito = document.querySelector('#añadido');
let carroLibre = []

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
   let talle = item.querySelector('#botonTalles').value;
   console.log(talle);
/* genera item */
   let newItem = {
     title : titulo,
     price: precio,
     img: imagen,
     cantidad: 1
   }
   
   addItemCarrito(newItem)

   añadirAlCarrito(titulo, imagen, precio);
}

/* agrega a variable global carroLibre el new item: producto clickeado */
function addItemCarrito(newItem){
 carroLibre.push(newItem)

 renderCarrito()
}

function renderCarrito(){
  console.log(carroLibre);
}

function añadirAlCarrito(titulo,imagen,precio, talle){

 let productosEnCarrito = carrito.getElementsByClassName('imgTitulo');
 console.log(productosEnCarrito);
 for (let i = 0; i < productosEnCarrito.length; i++) {
  if (productosEnCarrito[i].innerText === titulo) {
    let elementQuantity = productosEnCarrito[i].
      parentElement.parentElement.parentElement.querySelector(
        '.inputadCantidad'
      );
      elementQuantity.value++;
  }
}

let carritoFila = document.createElement('div');
let contenidoCarrito = ` <div class="container carritoItems">
                <div class="row">
                    <div class="col-lg-12 col-sm-12 col-md-12">
 <table class="table table-hover">
   <tbody>
    <tr>
     <td> <div class='imgTitulo'><img src='${imagen}'> ${titulo}</div></td>
     <td><div class='precioTablaCarrito'>${precio}</div></td>
     <td><div class='tallesDom'>${talle}</div></td>
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
 `;

for(let i=0; i < contenidoCarrito.length; i++){
 if(contenidoCarrito[i].innerText=== titulo){
  console.log(contenidoCarrito[i].innerText)
 }
}

 carritoFila.innerHTML = contenidoCarrito;
 carrito.append(carritoFila);

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

        addLocalStorage()
        
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
    /* Actualiza el total si varía la cantidad */
    actualizarTotal();
 }

 function addLocalStorage(){
  localStorage.setItem('carroLibre', JSON.stringify(carroLibre));
}

window.onload = function(){
  /* Si existe carroLibre lo parsea y lo guarda en storage */
  let storage = JSON.parse(localStorage.getItem('carroLibre'))
  if(storage){
    carroLibre = storage;
    renderCarrito();
  }
}