let precio = document.getElementsByClassName('precio');

let cuotas = document.getElementById('cuotas').value;

let total = document.getElementById('total');

function calcularPrecio(precio, cuotas){
    let totalPrecio = precio + precio* cuotas*.01;
    total.innerText = `${totalPrecio.toFixed(2)}`
}



cuotas.addEventListener('change', calcularPrecio) 

let productos = 
    {nombre: 'remera', precio: 500},
    {nombre: 'campera', precio: 2000},
    {nombre: 'gorra', precio: 700},
]

console.log(productos);

let cargaProductos = document.getElementById('productos');

for ( let producto of productos){
    cargaProductos.innerHTML+= `<div>
    <h4>${producto.nombre}</h4>
    <p>${producto.precio}</p>
</div>`
}

/* function darkMode(){
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
} */

let botonesCompra= document.querySelectorAll('.botonCompra');
let carrito = [];

for(let boton of botonesCompra){
    boton.addEventListener('click', agregarCarrito)
}

function agregarCarrito(e){
    console.log(e.target);
    let hijo = e.target;
    let padre = hijo.parentNode;
    let abuelo = padre.parentNode;
    let titulo = padre.querySelector('h5').textContent;
    let precio = padre.querySelector('.precio');


    let producto = {
    nombre: titulo,
    price: precio,
}
    
    let añadido = document.getElementsByClassName('compras');
    let confirmacion = document.createElement('p');
    confirmacion.innerHTML = `<p>Nombre: ${nombre.innerText}</p>
    <h5>Se añadió al carrito</h5>`;
    añadido.appendChild(confirmacion);
}


carrito.push(producto);
console.log(padre);
console.log(botonesCompra);