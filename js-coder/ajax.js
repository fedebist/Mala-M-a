$('#botonGet').click(function(){
    $.get('../js-coder/productos.json', function(datos){
        for (let producto of datos){
        $('#mostrarAjax').append(`
        <div class='container'>
        <div class='row'>
        <div class='col-lg-4 col-md-12 col-sm-12'>
        <h1>Producto:${producto.name}</h1>
        </div>
        <div class='col-lg-4 col-md-12 col-sm-12'>
        <h2>Precio:${producto.precio}</h2>
        </div>
        <div class='col-lg-4 col-md-12 col-sm-12'>
        <h2>Stock:${producto.stock}</h2>
        </div>
        </div>
        </div>
        `);
        }
        

    })
})



