/* function añadir(){
    let nombre = document.querySelector('.nombreProducto');
    let añadido = document.getElementById('añadido');
    console.log(nombre);

    let confirmacion = document.createElement('p');
    confirmacion.innerHTML = `<p>Nombre: ${nombre.innerText}</p>
    <h5>Se añadió al carrito</h5>`;
    añadido.appendChild(confirmacion);
} */

function borrar(){
    let añadido = document.getElementById('añadido');
    añadido.removeChild(añadido.lastChild);
    let total = document.getElementById('resumenCompra');
    total.removeChild(total.lastChild);
}

/* let botonCompra = document.querySelector('.añadirCarrito')

botonCompra.addEventListener('click', (e)=>{
    let nombre = document.getElementsByClassName('nombreProducto')
    console.log(nombre.textContent)

}
) */

/* ------------------------ Carro -------------------------- */

/*  let catalogo = document.getElementById('tienda')

catalogo.addEventListener('click', (e)=>{
    e.preventDefault();
    console.log(e.target);
    console.log(e.target.classList.contains('añadirCarrito'));
    if(e.target.classList.contains('añadirCarrito')){
        let confirmacion = document.createElement('p');
        let confirmacionNav = document.createElement('p');
        let añadido = document.getElementById('añadido');
        let añadidoNav = document.getElementById('añadidoNav');
        let nombre = document.getElementById('nombreProducto');
        let precio = document.getElementById('precio');
        confirmacion.innerHTML = `<p>Nombre: ${nombre.textContent}</p>
        <h5>Se añadió al carrito</h5>
        Precio: ${precio.innerText}`;
        añadido.appendChild(confirmacion);
        confirmacionNav.innerHTML = `${nombre.textContent}</p>`;
        añadidoNav.appendChild(confirmacionNav);
        console.log(nombre.textContent);
    }
    else if(e.target.classList.contains('añadirCarritoJean')){
    let confirmacion = document.createElement('p');
    let añadido = document.getElementById('añadido');
    let nombre = document.getElementById('nombreProducto');
    let precio = document.getElementById('precio');
    confirmacion.innerHTML = `<p>Nombre: Jean mom</p>
    <h5>Se añadió al carrito</h5>
    Precio: $3000`;
    añadido.appendChild(confirmacion);
    console.log(nombre.textContent);
    }
    else if(e.target.classList.contains('añadirCarritoBlanca')){
        let confirmacion = document.createElement('p');
        let añadido = document.getElementById('añadido');
        let nombre = document.getElementById('nombreProducto');
        let precio = document.getElementById('precio');
        confirmacion.innerHTML = `<p>Nombre: Remera básica blanca</p>
        <h5>Se añadió al carrito</h5>
        Precio: $2000`;
        añadido.appendChild(confirmacion);
        console.log(nombre.textContent);
        }
        else if(e.target.classList.contains('añadirCarritoSweater')){
        let confirmacion = document.createElement('p');
        let añadido = document.getElementById('añadido');
        let nombre = document.getElementById('nombreProducto');
        let precio = document.getElementById('precio');
        confirmacion.innerHTML = `<p>Nombre: Sweater White</p>
        <h5>Se añadió al carrito</h5>
        Precio: $2199`;
        añadido.appendChild(confirmacion);
        console.log(nombre.textContent);
        }
        else if(e.target.classList.contains('añadirCarritoCampera')){
        let confirmacion = document.createElement('p');
         let añadido = document.getElementById('añadido');
        let nombre = document.getElementById('nombreProducto');
        let precio = document.getElementById('precio');
        confirmacion.innerHTML = `<p>Nombre: Hoodie Campera</p>
        <h5>Se añadió al carrito</h5>
        Precio: $10200`;
         añadido.appendChild(confirmacion);
        console.log(nombre.textContent);
            }
        else if(e.target.classList.contains('añadirCarritoPantalon')){
        let confirmacion = document.createElement('p');
         let añadido = document.getElementById('añadido');
        let nombre = document.getElementById('nombreProducto');
        let precio = document.getElementById('precio');
        confirmacion.innerHTML = `<p>Nombre: Pantalón Black Summer</p>
        <h5>Se añadió al carrito</h5>
        Precio: $3600`;
         añadido.appendChild(confirmacion);
         console.log(nombre.textContent);
        }

        let total = document.getElementById('total');
        let suma = document.createElement('p');
        let precio = document.getElementById('precio');
        console.log(precio.textContent);
        suma.innerHTML = ``;
        total.appendChild(suma);
 
})

let total = document.getElementById('total');
let suma = document.createElement('p');
suma.innerHTML = `0`  */
 
/* -------- Carrito ------------------------------------------- */








/* -------------------------------------------------------------- */

let botonesCompra = document.querySelectorAll('.añadirCarrito');
let carrito = [];

for(let boton of botonesCompra){
    boton.addEventListener('click', agregarCarrito);

}

function agregarCarrito(e){
    console.log(e.target);
    let hijo = e.target;
    let padre = hijo.parentNode.parentNode.parentNode;
    let titulo = padre.querySelector('h5').textContent;
    let imagen = padre.querySelector('img').src;
    let talles = $('talles');
    console.log(talles);
    console.log(padre);
    console.log(titulo);
    console.log(imagen);

    /* Actualizar precio */
    let total = 0;
    let totalCarrito = $('#resumenCompra');
    botonesCompra.forEach(botonesCompra=>{
    let precio = padre.querySelector('#precio');
    /* Reemplaza signo $ por un string vacío. Number para pasar a int */
    let precioSolo = Number(precio.textContent.replace('$', ''));
    total = total + precioSolo;
    $('#resumenCompra').append(`${precioSolo}`);
    })

/*     let total = 0;
    let totalCarrito = $('#resumenCompra');
    botonesCompra.forEach(items=>{
    let precio = padre.querySelector('#precio');
    let precioSolo = precioProducto.textContent.replace('$', '');
    console.log(precio); */
    

    $('#añadido').append(`<div class='listadoCarro'>${titulo} ${precio}  <img src='${imagen}'> <button class='eliminarDinamico' onclick='borrar()'>Eliminar Producto</button> \n</div>`);

    $('#añadidoNav').append(`${titulo} ${precio} <img src='${imagen}'>\n`);
    
}
;

/* CONTADOR */

let container = document.querySelector('.containerContador');
let span = $('#contador');
let contador = 0;

container.addEventListener('click', (e) =>{
     if(e.target.classList.contains('.añadirCarrito')){
        contador ++;
        span.textContent = contador
        console.log('Estás sumandooo');
    }
    });

/* Precio */


/* ----------- */

/* let precio = $('#precio')
let precioParse = parseInt(precio);
let total = $('#resumenCompra');

total.addEventListener('change', sumarPrecio);

function sumarPrecio(){
    let totalPrecio = precioParse + precioParse;
    $('#resumenCompra').append(`${totalPrecio}`);
    console.log(totalPrecio);
} */


/* Talles */

let botonesTalle = $('#botonTalles')

for(let botonTalle of botonesTalle){
    botonTalle.addEventListener('click', talles)
}

function talles(e){
    console.log(e.target.value);
    console.log(e.target.textContent);
}


