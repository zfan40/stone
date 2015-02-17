<?php
include_once('db/db.inventory.php');

$mod = new InventoryModel();
$res = $mod->getById(1);

//var_dump($res);
header('Content-Type: text/plain; charset=utf-8');

echo json_encode($res, JSON_PRETTY_PRINT);
?>
