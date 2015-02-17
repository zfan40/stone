<?php
include_once('db/db.inventory.php');
include_once('db/db.case.php');
include_once('common.lib.php');

$inventoryId = _Get('inventoryId');
if (empty($inventoryId)) {
	sendResponse(null, -1, 'param inventoryId must not be empty');
}

$inventoryMod = new InventoryModel();
$inventory = $inventoryMod->getById($inventoryId);

if(!empty($inventory)) {
	$caseMod = new CaseModel();
	$cases = $caseMod->getByInventoryId($inventoryId);

	$inventory['cases'] = $cases;
}


sendResponse($inventory);
?>
