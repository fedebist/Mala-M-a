let productosTienda = [
    {id:'1', nombre:'Remera básica negra', precio:2000, stock: 20},
    {id:'2', nombre:'Remera básica blanca', precio:2000, stock: 15},
    {id:'3', nombre:'Sweater', precio:2200, stock : 25},
    {id:'4', nombre:'Jean mom', precio:3000, stock : 15},
    {id:'5', nombre:'Campera', precio:10200, stock : 10},
    {id:'6', nombre:'Pantalón black summer', precio:3600, stock : 10},
   ];


let barra = document.querySelector('#barra');
let botonBusqueda = document.querySelector('#botonBusqueda');
let resultado = document.querySelector('#resultado');

let filtrar = ()=>{
    /* li vacío */
    resultado.innerHTML = '';
    /* pasar texto escrito a minúscula p comparar con array productos */
    let texto = barra.value.toLowerCase();
    for(let producto of productosTienda){
        /* traer nombre de array */
        let nombre = producto.nombre.toLowerCase();
        /* indexOf retorna elemento si existe, buscar texto dentro de nombre, si la encuentro retorna eso !== (significa distinto), por que si es distinto lo encontró */
        if(nombre.indexOf(texto) !== -1){
          resultado.innerHTML +=
           `
          <li>${producto.nombre} - Precio: ${producto.precio}</li>
          `
        }
        if(resultado.innerHTML === ''){
            resultado.innerHTML +=
            `<li>Producto no encontrado</li>`
        }
    }
};

botonBusqueda.addEventListener('click', filtrar);
barra.addEventListener('keyup', filtrar)

/* filtrar(); */
