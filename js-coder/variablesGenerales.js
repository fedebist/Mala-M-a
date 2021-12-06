let resp = 'si';
const selectedCantidad = '¿Cuántas unidades desea llevar?'
let cart = []

let productos = [
     {id:'1', name:'Remera básica negra', precio:2000, stock: 20},
     {id:'2', name:'Remera básica blanca', precio:2000, stock: 15},
     {id:'3', name:'Sweater', precio:2200, stock : 25},
     {id:'4', name:'Jean mom', precio:3000, stock : 15},
     {id:'5', name:'Campera', precio:10200, stock : 10},
     {id:'6', name:'Pantalón black summer', precio:3600, stock : 10},
    ]

    /* let nombreCarrito = document.getElementsByClassName('compras');
    let listado = document.createElement('p');
    listado.innerHTML = `${nombre.innerText}`;
    nombreCarrito.appendChild(listado); */
    
    console.log(productos);

let añadirProductos = document.getElementsByClassName('añadirCarrito');
añadirProductos.addEventListener('click', e=>{
     e.preventDefault();
     let listado = document.getElementsByClassName('compras');

for (let producto of productos){
     listado.innerHTML+= `<div>
     <h4>${producto.name}</h4>
     <p>$ ${producto.precio}</p>
     </div>`
}
})

/* let listado = document.getElementsByClassName('compras');

for (let producto of productos){
     listado.innerHTML+= `<div>
     <h4>${producto.name}</h4>
     <p>$ ${producto.precio}</p>
     </div>`
} */


function productosCarrito (id, name, precio, stock){
     this.id = id;
     this.name= name,
     this.precio= precio,
     this.stock= stock
}

const producto1 = new productosCarrito('1', 'Remera básica negra', 2000, 20)
const producto2 = new productosCarrito('2', 'Remera básica blanca', 2000, 15)
const producto3 = new productosCarrito('3', 'Sweater', 2200, 20)
const producto4 = new productosCarrito('4', 'Jean mom', 3000, 20)
const producto5 = new productosCarrito('5', 'Campera', 10200, 10)
const producto6 = new productosCarrito('6', 'Pantalón black summer', 3600, 10)

/* const lista = [producto1.precio, producto2.precio, producto3.precio, producto4.precio, producto5.precio, producto6.precio]
alert('La lista de precios desordenada es: ' + lista)

lista.sort((a, b) =>{
     if (a < b){  valor a va antes que el b 
          return -1;
     }
     if (a > b){  valor b va antes que el a
          return 1;
     }
     return 0;
}); 

alert('La lista de precios ordenada de menor a mayor es: ' + lista + '\n'); */