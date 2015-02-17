<?php
include_once('db/db.php');
include_once('common.lib.php');

$db = new Model('company');

$keys = array('companyId', 'enAlias', 'logoUrl', 'cnAlias',
	'companyDescription', 'properties', 'employeeAmount',
	'foundDate', 'nation', 'state', 'city');
$res = $db->getAll($keys);

foreach($res as $i => $row) {
	$res[$i]['properties'] = explode(',',$row['properties']);
}

//var_dump($res);
//header('Content-Type: text/plain; charset=utf-8');
//header('Content-Type: application/json; charset=utf-8');

//echo json_encode($res, MY_JSON_OPTIONS);

sendResponse($res);
?>
