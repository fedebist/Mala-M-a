let boton = document.getElementById('boton');

function saludar(){
    alert('Mouse Moveee');
}

/* boton.addEventListener('click', function(){
    console.log('HOLLA ANONIMO');
}); */

/* Eventos de mouse */
/* boton.addEventListener('mousemove', saludar); */

/* boton.addEventListener('mousedown', function(e){
     console.log(e.button);
     if(e.button == 0){
         console.log('BOTON IZQUIERDO');
     }
     else if(e.button == 1){
         console.log('Botón ruedita');
     }
     else if(e.button == 2){
         console.log('Botón derecho');
     }
}); */

/* ------------------- Teclado ----------------- */

/* window.addEventListener('keydown', function(e){
     console.log(e.key);
     if(e.key == 'a'){
         document.body.style.background = 'blue';
     }
     else if(e.key == 'e'){
        document.body.style.background = 'white';
     }
});

window.addEventListener('keyup', function(e){
    if (e.key == 'a'){
        document.body.style.background = 'red';
    }
}) */

let botonForm = document.getElementById('botonForm');

botonForm.addEventListener('click', function(e){
    e.preventDefault();
    let usuario = document.getElementById('usuario');
    let pass = document.getElementById('pass');

    console. log(usuario.value);
    console.log(pass.value);
})

let formulario = document.getElementById('formulario');

formulario.addEventListener('submit', function(){

})

let link= document.getElementById('google');

link.addEventListener('click', e=>{
    e.preventDefault();
    alert('NO');
})

