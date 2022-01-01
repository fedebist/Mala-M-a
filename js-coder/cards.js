let productos = [
    {name:'Remera básica negra', precio: 2000, stock: 20, imagen: 'img/Multimedia/básica negra.png'},
    {name:'Remera básica blanca', precio:2000, stock: 15},
    {name:'Sweater', precio: 2200, stock : 25},
    {name:'Jean mom', precio: 3000, stock : 15},
    {name:'Campera', precio: 10200, stock : 10},
    {name:'Pantalón black summer', precio: 3600, stock : 10},
   ];

console.log(productos);

let cargaProductos = $('#productos');

for (let producto of productos){
    cargaProductos.append(`<div>
    <h3>${producto.name}</h3>
    <img src='${producto.imagen} alt=''>
    <h4>${producto.precio}</h4>`)
}