function guardarLocalStorage(){
     
  let usuario = {
      nombre: 'José',
      Edad: 33,
  };

  localStorage.setItem('usuario', JSON.stringify(usuario));



}

guardarLocalStorage();

function infoLocalStorage(){
    if(JSON.parse(localStorage.getItem('usuario'))){
    let usuario = JSON.parse(localStorage.getItem('usuario'));
    console.log(usuario);
}
else{
    console.log('No hay información en Local Storage');
}
}
infoLocalStorage();