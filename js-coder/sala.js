 let precio = document.getElementById('precio').value;

let cuotas = document.getElementById('cuotas').value;

let total = document.getElementById('total');

function calcularPrecio(precio, cuotas){
    let totalPrecio = precio + precio* cuotas*.01;
    total.innerText = `${totalPrecio.toFixed(2)}`
}



cuotas.addEventListener('change', calcularPrecio) 

let productos = [
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

function darkMode(){
  document.body.style.background = 'black';
  let carro = document.getElementsByClassName('carrito');
  carrito.style.background = 'grey';
  let navBar = document.getElementsByTagName('nav');
  navBar.style.background = 'black';
}

function lightMode(){
    document.body.style.background = 'beige';
    let carro = document.getElementsByClassName('carrito');
    carrito.style.background = '#798177';
}