function añadir(){
    let nombre = document.getElementById('nombreProducto');
    let añadido = document.getElementById('añadido');

    let confirmacion = document.createElement('p');
    confirmacion.innerHTML = `<p>Nombre: ${nombre.innerText}</p>
    <h5>Se añadió al carrito</h5>`;
    añadido.appendChild(confirmacion);
}

function borrar(){
    let añadido = document.getElementById('añadido');
    añadido.removeChild(añadido.lastChild);
}