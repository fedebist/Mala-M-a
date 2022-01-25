  let categorias = document.querySelectorAll('.btnFiltros');
console.log(categorias);

categorias.forEach(cat=>{
    cat.addEventListener('click', mostrarCategoria)
})

function mostrarCategoria(e){
let boton = e.target;
/* category de cada botón */
let categoria = $(this).attr('category');
console.log(categoria);

/* OCULTANDO PRODUCTOS */
$('.card').hide();

/* MOSTRANDO PRODUCTOS */

$('.card[category=“remeras”]').show()

}   

