let btn = document.querySelectorAll('.verMas');
carrito = [ ]

btn.forEach(verMas=>{
    verMas.addEventListener('click', detalle);
});

function detalle(e){
    let boton = e.target;
    let item = boton.parentNode.parentNode.parentNode;
    let titulo = item.querySelector('.nombreProducto').textContent;
    let precio = item.querySelector('.precio').textContent;
    let imagen = item.querySelector('img').src;
    let talle = item.querySelector('#botonTalles').value;
    console.log(talle);

    
    let newItem = {
        titulo: titulo,
        precio: precio,
        img: imagen,
        talle: talle,
        cantidad: 1,
      }

      carrito.push(newItem);
      mostrar();
};

function mostrar(){
    $('#detalleProducto').append(`
    ${titulo}HOLA
    `)

    console.log(item.titulo);

}