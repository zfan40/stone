<?php
include_once('config.php');


function sendResponse($data, $errorcode=0, $msg='') {
	$res = array(
		'errorcode' => $errorcode,
		'msg' => $msg,
		'data' => $data
	);

	header('Content-Type: application/json; charset=utf-8');
	//echo json_encode($res, JSON_PRETTY_PRINT);
	die(json_encode($res, MY_JSON_OPTIONS));
}

function _Get($key) {
	if (empty($key) || !isset($_GET[$key]))
		return "";
	return $_GET[$key];
}

function _Post($key) {
	if (empty($key) || !isset($_POST[$key]))
		return "";
	return $_POST[$key];
}

function _Req($key) {
	if (empty($key) || !isset($_REQUEST[$key]))
		return "";
	return $_REQUEST[$key];
}
?>
