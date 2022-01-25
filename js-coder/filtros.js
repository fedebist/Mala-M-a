/* Agregar clase activo al primer filtro*/
$('.filtrosProductos .categorias[category="all"]').addClass('itemActivo');

$('.categorias').click(function(){
  /* valor de atributo category */
  let categorias = $(this).attr('category');
  console.log(categorias);

  /* Remover la clase activo del anteúltimo clickeado */
  $('.categorias').removeClass('itemActivo');
  /* Agregar clase activo al clickeado */
  $(this).addClass('itemActivo');

   /* OCULTAR PRODUCTOS */
   $('.card').css('transform', 'scale(0)');
  function ocultarProducto(){
    $('.card').hide();
  } setTimeout(ocultarProducto, 400);


  /* MOSTRAR PRODUCTOS */
     /* category= variable local categorias, trae atributo category */
     function mostrarProducto(){
      $('.card[category="'+categorias+'"]').show(); 
      $('.card[category="'+categorias+'"]').css('transform', 'scale(1)');
    } setTimeout(mostrarProducto, 400);
  
});

/* Función filtro 'TODO' */
$('.categorias[category="all"]').click(function(){
  function mostrarTodo(){
    $('.card').show();
    $('.card').css('transform', 'scale(1)');
  }setTimeout(mostrarTodo, 400);
});