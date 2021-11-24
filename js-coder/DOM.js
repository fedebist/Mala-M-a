function añadir(){
    let nombre = document.getElementsByClassName('h5.fw-bolder.nombreProducto');
    let añadido = document.getElementById('añadido');
    console.log(nombre);

    let confirmacion = document.createElement('p');
    confirmacion.innerHTML = `<p>Nombre: ${nombre.innerText}</p>
    <h5>Se añadió al carrito</h5>`;
    añadido.appendChild(confirmacion);
}

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