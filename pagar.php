          
<?php
// SDK de Mercado Pago
require __DIR__ .  '/vendor/autoload.php';

// Agrega credenciales
MercadoPago\SDK::setAccessToken('TEST-6334481468532363-012722-888c3657ae6823268f8be2bb0244e097-214755931');

// Crea un objeto de preferencia
$preference = new MercadoPago\Preference();
$preference->back_urls = array(
    "success" => "https://fedebist.github.io/Mala-M-a/",
    "failure" => "http://www.tu-sitio/failure",
    "pending" => "http://www.tu-sitio/pending"
);
$preference->auto_return = "approved";

// Crea un ítem en la preferencia
$datos=array();
for($x=0;$x<10;$x++){
$item = new MercadoPago\Item();
$item->title = 'Chomba negra';
$item->quantity = 1;
$item->unit_price = 3600;
$datos[ ]=$item;
}

$preference->items = ($datos);
$preference->save();
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Mp</title>
</head>
<body>


<script
  src="https://www.mercadopago.com.ar/integrations/v1/web-payment-checkout.js"
  data-preference-id="<?php echo $preference->id; ?>">
</script>

    
</body>
</html>

curl -X POST-H "Content-Type: application/json" -H 'Authorization: Bearer TEST-6334481468532363-012722-888c3657ae6823268f8be2bb0244e097-214755931' "https://api.mercadopago.com/users/test_user" -d "{'site_id':'MLA'}"