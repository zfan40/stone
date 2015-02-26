<?php
include_once('db/db.company.php');
include_once('db/db.inventory.php');
include_once('db/db.case.php');
include_once('common.lib.php');

// 获取参数
$enAlias = _Get('enAlias');
if (empty($enAlias)) {
	sendResponse(null, -1, 'param enAlias must not be null!');
}

// 获取公司名称
$companyMod = new CompanyModel();
$companyInfo = $companyMod->getByEnAlias($enAlias);

if (!empty($companyInfo)) {
	$companyId = $companyInfo['companyId'];

	// 获取公司的存货
	$inventoryMod = new InventoryModel();
	$inventories = $inventoryMod->getList($companyId, 20);

	$companyInfo['inventories'] = $inventories;

	// 获取公司的案例
	$caseMod = new CaseModel();
	$caseShow = $caseMod->getByCompanyId($companyId);

	$companyInfo['caseShow'] = $caseShow;
}

sendResponse($companyInfo);
?>
