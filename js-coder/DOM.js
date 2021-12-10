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
}

function precios(){
    let precio = document.getElementsByClassName('precio');
    let precioCarrito = document.getElementsByClassName('preciosCarrito');

    let precioPantalla = document.createElement ('p');
    precioPantalla.innerHTML = `<p>Precio: ${precio.innerText}</p>`
    precioCarrito.appendChild(precioPantalla);
}

/* let botonCompra = document.querySelector('.añadirCarrito')

botonCompra.addEventListener('click', (e)=>{
    let nombre = document.getElementsByClassName('nombreProducto')
    console.log(nombre.textContent)

}
) */

/* ------------------------ Carro -------------------------- */

 let catalogo = document.getElementById('tienda')

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
        /* Precios */
        let total = document.getElementById('total');
        let suma = document.createElement('p');
        let precio = document.getElementById('precio');
        console.log(precio.textContent);
        suma.innerHTML = ``;
        total.appendChild(suma);
 
})

let total = document.getElementById('total');
let suma = document.createElement('p');
suma.innerHTML = `0`
 

/* -------------------------------------------------------------- */

/*  let botonesCompra = document.querySelectorAll('.añadirCarrito');
let carrito = [];

for(let boton of botonesCompra){
    boton.addEventListener('click', agregarCarrito);

}

function agregarCarrito(e){
    console.log(e.target);
    let hijo = e.target;
    let padre = hijo.parentNode.parentNode;
    let titulo = padre.querySelector('h5').textContent;
    console.log(padre);
    console.log(titulo);  
}  */