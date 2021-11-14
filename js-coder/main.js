alert('Bienvenido a tu shopping online de confianza');
 
do{ /* opcion que el usuario va a elegir. Break cuando ponga salir*/
   let option = showMenu();
   if(option=== (productos.legth +1)){
       break;
   }
   let cantidad = parseInt(prompt(selectedCantidad)); 
   addToCart(option, cantidad);

   resp = prompt('¿Desea continuar comprando? sí/no')
}while(resp== 'Si' || resp=='si' || resp== 'Sí' || resp=='sí');

/* Si usuario responde Si, si, sí, Sí, repite el ciclo */

if(cart.length>0)
showTotal();

alert('Gracias por tu visita');


