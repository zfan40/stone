<?php
include_once('db/db.inventory.php');
include_once('common.lib.php');

$mod = new InventoryModel();
$condition = array(
	'mainColor' => [20, 20, 30]
);
$res = $mod->search($condition, 'sendResponse');

//var_dump($res);
header('Content-Type: text/plain; charset=utf-8');

echo json_encode($res, JSON_PRETTY_PRINT);
?>
