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
    let tr = document.createElement('tr');
    /* agregar clase al tr */
    tr.classList.add('itemCarrito');
    let contenido = `
    <th scope="row"><b><h6 class='tituloTabla'>${item.titulo}</b></h6></th>
    <td class='productoTabla'><img src='${item.img}'> 
    <td class='talleTabla'>${item.talle}</td>
    <td class='precioTabla'>${item.precio}</td>
    <td class='cantidadTabla'><input class='inputCantidad' type='number' min='1' value=${item.cantidad}></td>
    <td><button class='btnBorrarCarrito'>X</button></td>
    
    
    `
    console.log(carrito)
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

window.onload = function(){
  /* Si existe carroLibre lo parsea y lo guarda en storage */
  let storage = JSON.parse(localStorage.getItem('carrito'));
  if(storage){
    carrito = storage;
    renderizarCarrito();
  }
}