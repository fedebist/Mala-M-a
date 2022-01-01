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

 let url = 'https://jsonplaceholder.typicode.com/posts';

 $('#botonGet').click(function(){
    $.get(url, function(datos){
       console.log(datos);
    })
 });

 let cliente =  [
   {id:'1', name:'Remera básica negra', precio:2000, stock: 20},
   {id:'2', name:'Remera básica blanca', precio:2000, stock: 15},
   {id:'3', name:'Sweater', precio:2200, stock : 25},
   {id:'4', name:'Jean mom', precio:3000, stock : 15},
   {id:'5', name:'Campera', precio:10200, stock : 10},
   {id:'6', name:'Pantalón black summer', precio:3600, stock : 10},
  ];

$('#botonPost').click(function(){
    $.post(url, cliente, function(datos){
       console.log(datos);
    })
 })