/* Este archivo contiene las funciones necesarias para el shop */

/* Esta función genera el menú dinámico en base a los productos existentes
Retorna el ID del producuto elegido */
const showMenu= () =>{
    let menu = 'Escoge un producto \n';
    productos.forEach((producto)=>{
        menu = menu + producto.id + '.- ' + producto.name +  ': ' + producto.precio +'\n'
    });
    menu += (productos.length+1) + '.-Salir';
    let opcion = parseInt(prompt(menu));
    return opcion;
};
//---------------------------------------------------------------------
/* Esta función determina si hay stock suficiente para la venta */
/* Retorna false si no hay stock, true si hay */

const isStock= (cantidad, stock)=>{
    if(cantidad> stock){
        alert('No hay stock suficiente, el disponible es de ' + stock + ' unidades');
        return false;
    }
    return true;
}

/* Esta función agrega al carrito un producto */

const addToCart = (option, cantidad) =>{
    const found = productos.find(producto => producto.id == option);
    if(isStock(cantidad, found.stock)){
        let item = {
            cantidad:cantidad,
            precio: found.precio * cantidad,
            name: found.name
        }
        cart.push(item);
        productos[option - 1].stock -= cantidad;
        alert(found.name+ ' se agregó al carrito')
    }
}

//------------------------------------------------------------------------

/* Esta función muestra el total a pagar y productos a llevar */
const showTotal = () => {
    let data = '';
    let total = 0
    cart.forEach(producto=>{
        data += producto.name + '\n' + 'Cantidad: ' + producto.cantidad + '\n' + 'Precio: $' + producto.precio + '\n'
       total= total + producto.precio
    })
    data += 'Total de la compra: $' + total
    alert(data);
}

//------------------------------------------------------------------------


