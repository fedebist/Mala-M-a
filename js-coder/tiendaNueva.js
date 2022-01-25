let botonesCompra = document.querySelectorAll('.añadirCarrito');
let carrito = [ ]
let tbody = document.querySelector('.tbody');


botonesCompra.forEach(agregarCarritoBoton =>{
    agregarCarritoBoton.addEventListener('click', agregarCarrito);
});
/* evento click */
function agregarCarrito(e){
 let boton = e.target;
 let item = boton.parentNode.parentNode.parentNode;
 let titulo = item.querySelector('#nombreProducto').textContent;
 let precio = item.querySelector('#precio').textContent;
 let imagen = item.querySelector('img').src;
 let talle = item.querySelector('#botonTalles').value;

let newItem = {
  titulo: titulo,
  precio: precio,
  img: imagen,
  talle: talle,
  cantidad: 1,
}

agregarItemCarrito(newItem);

}

/* guardar dentro de variable global carrito el nuevo item */
function agregarItemCarrito(newItem){
 /* seleccionar input de cantidad del carrito */
let inputCantidad = tbody.getElementsByClassName('inputCantidad');  

/* ver longitud del carrito, si titulo = titulo item, sumar cantidad */
 for(let i = 0; i < carrito.length; i++){
     if(carrito[i].titulo.trim() === newItem.titulo.trim()){
        carrito[i].cantidad ++;
        let inputValue = inputCantidad[i]
        inputValue.value++;
        alert(`El producto ya estaba en el carrito, la cantidad ahora es ${carrito[i].cantidad} `)
        /* actualizar precio si hay cambios en cantidad */
        actualizarTotal();

      
       return null;
     }
 }

  carrito.push(newItem);
  
  renderizarCarrito()
}

function renderizarCarrito(){
   tbody.innerHTML = '';
   carrito.forEach(item =>{
    let tr = document.createElement('p');
    /* agregar clase al tr */
    tr.classList.add('itemCarrito');
    let contenido = `
    <div class="container">
    <div class="row">
        <div class='col-lg-2 col-sm-12'>
            <img src='${item.img}' width= '100px'>
        </div>
        <div class="col-lg-4 col-sm-12">
        <b><h6 class='tituloTabla'>${item.titulo}</b></h6>
          <p class='mt-5 eliminarCarrito'>Eliminar producto <button class='btnBorrarCarrito'>X</button></p>
        </div>
        <div class='col-lg-3 col-sm-12'>
         <p class='talleTabla'><b>Talle: </b>${item.talle}</p>
            <p class='cantidadTabla'><b>Cantidad</b>   <input class='inputCantidad' type='number' min='1' max='5' value=${item.cantidad}></p>
        </div>
        <div class='col-lg-3 col-sm-12'>
           <p><b>Precio unitario:</b> ${item.precio}</p>

        </div>
    </div>
</div>
    
    
    `
    console.log(carrito);
    /* dentro de tr, agregar contenido */
    tr.innerHTML = contenido;
    /* agregar al tbody el contenido */
    tbody.append(tr);

    /* iniciar función de borrado */
tr.querySelector('.btnBorrarCarrito')
.addEventListener('click', borrarItem);
/* función cantidad */
tr.querySelector('.inputCantidad')
.addEventListener('change', cantidadChange)

    /* actualizar total al añadir productos*/
    actualizarTotal();
   })


}

function actualizarTotal(){
    let total = 0;
    let totalHTML = document.querySelector('.totalCompra');
    carrito.forEach((item)=>{
        /* reemplazar signo $ por string vacío */
        let precio = Number(item.precio.replace('$', ''));
        total = total + precio* item.cantidad;
    })

   totalHTML.innerHTML = `$${total.toFixed(2)}`;
   addLocalStorage();
}


function borrarItem(e){
    let botonClickeado= e.target;
    let tr = botonClickeado.closest('.itemCarrito');
    /* traer título del render */
    let titulo = tr.querySelector('.tituloTabla').textContent;
    for( let i = 0 ; i< carrito.length; i++){
        if(carrito[i].titulo.trim() === titulo){
            /* eliminar elemento donde estamos, 1 cantidad  */
            carrito.splice(i, 1);
        }
    }

    tr.remove();
    actualizarTotal()
}

function cantidadChange(e){
    let cambio = e.target;
    let tr = cambio.closest('.itemCarrito');
    let titulo = tr.querySelector('.tituloTabla').textContent;
    carrito.forEach(item =>{
        if(item.titulo.trim() === titulo){
            /* si input es menor o igual a 0, volver a 1 */
            cambio.value <= 0 ?
            (cambio.value = 1)
           : cambio.value
           /* si input es mayor a 5, volver a 5 */
           cambio.value > 5 ?
           (cambio.value = 5)
          : cambio.value
           item.cantidad = cambio.value;
           /* actualizar total si varía la cantidad */
           actualizarTotal();
        }
    })

 }

 function addLocalStorage(){
  localStorage.setItem('carrito', JSON.stringify(carrito));
}

/* busca el getItem en local storage si existe carrito */
window.onload = function(){
  /* Si existe carrito lo parsea y lo guarda en storage */
  let storage = JSON.parse(localStorage.getItem('carrito'));
  if(storage){
    carrito = storage;
    renderizarCarrito();
  }
}