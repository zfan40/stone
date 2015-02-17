<?php
include_once('db/db.company.php');
include_once('db/db.inventory.php');
include_once('common.lib.php');

$enAlias = _Get('enAlias');
if (empty($enAlias)) {
	sendResponse(null, -1, 'param enAlias must not be null!');
}

$companyMod = new CompanyModel();
$companyInfo = $companyMod->getByEnAlias($enAlias);

if (!empty($companyInfo)) {
	$inventoryMod = new InventoryModel();
	$inventories = $inventoryMod->getList($companyInfo['companyId'], 20);

	$companyInfo['inventories'] = $inventories;
}

sendResponse($companyInfo);
?>
