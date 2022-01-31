<?php

require 'vendor/autoload.php';

MercadoPago\SDK::setAccesToken('TEST-6334481468532363-012722-888c3657ae6823268f8be2bb0244e097-214755931');

$preference = new MercadoPago\Preference();

$item = newMercadoPago\Item();
$item-> id = '0001';
$item->title = 'Producto 1';
$item->quantity= 1;
$item->unit_price = 150;
$item->currency_id = 'Ar$';

$preference->items = array($item);

$preference-> save();

?>

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>
<body>
  
<h1>Mercado Pago</h1>

<div class='btnCheckout'></div>

<script>

let mp = new MercadoPago('TEST-190ff766-33c1-4046-ba06-dcbbcede1bb5', {
  locale: 'es-AR';
  });

   mp.checkout({
     preference: {
       id: '<?php echo $preference->id ?>'
     }, 
     render: {
       container: '.btnCheckout',
       label: 'Pagar con MP'
     }
   })
</script>



// SDK MercadoPago.js V2
<script src="https://sdk.mercadopago.com/js/v2"></script>

</body>
</html>