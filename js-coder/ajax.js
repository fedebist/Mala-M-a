let stock = [
    {name:'Remera básica negra', stock: 20},
    {name:'Remera básica blanca', stock: 15},
    {name:'Sweater', stock : 25},
    {name:'Jean mom', stock : 15},
    {name:'Campera', stock : 10},
    {name:'Pantalón black summer', stock : 10},
   ];

$('#stock').click(function(){
    $.post(stock, function(datos){
       console.log(datos);
    })
 })