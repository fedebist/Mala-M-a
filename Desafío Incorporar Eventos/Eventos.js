/* function botonRojo(){
    let botonHTML = document.getElementById('boton');
     botonHTML.addEventListener('click', botonClick)
}

function botonAzul(){
    let btnAzul = document.getElementById('botonAzul');
    btnAzul.addEventListener('click', clickAzul)
}

function botonClick(){
    let titulo = document.getElementById('encabezado');
    titulo.style.color = 'red';
}

function clickAzul(){
    let titulo = document.getElementById('encabezado');
    titulo.style.color = 'blue';
} */

/* const btnAumentar = document.querySelector('.btn-info') */


/* 
btnAumentar.addEventListener('click', () => {
    console.log('me diste click aumentar');
    contador++
    span.textContent = contador 
}); */

let container = document.querySelector('.container')
let span = document.getElementById('span')
let contador = 0

container.addEventListener('click', (e) =>{
    /* console.log(e.target); */
/*     console.log(e.target.classList.contains('btn-info')); */
    if(e.target.classList.contains('btn-info')){
        contador ++;
        span.textContent = contador
        console.log('Estás sumando');
    }
    else if(e.target.classList.contains('btn-danger')){
        contador --;
        span.textContent = contador
        console.log('Estás restando');
    }
})



