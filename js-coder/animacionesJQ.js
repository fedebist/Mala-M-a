$('.verMasBasica').click(function(){
    $('.descripcionProductoBasica').toggle(1000);
})

$('.verMasSweater').click(function(){
    $('.descripcionProductoSweater').toggle(1000);
})

$('.verMasJean').click(function(){
    $('.descripcionProductoJean').toggle(1000);
})

$('.verMasCampera').click(function(){
    $('.descripcionProductoCampera').toggle(1000);
})

$('.verMasPantalon').click(function(){
    $('.descripcionProductoPantalon').toggle(1000);
})
 
 





/* -------------------------------------------- */

/* let botonesMas = document.querySelectorAll('.botonesVer')

for (let btns of botonesMas){
    btns.addEventListener('click', mostrarInfo);
}

function mostrarInfo(e){

let hijo = e.target;
let padre = hijo.parentNode.parentNode; 
let descripcion = padre.querySelector('.descripcionProducto');
let boton = padre.querySelector('.verMas');
let titulo = padre.querySelector('h5');
console.log(titulo);
console.log(boton);
console.log(descripcion)
console.log(padre);
if(e.target.classList.contains('Remera básica')){
    console.log('Remera basica asheeee');

}

}

 */