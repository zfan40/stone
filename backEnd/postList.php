<?php
include_once('db/db.post.php');
include_once('common.lib.php');

$db = new PostModel;

$page = _Get('page', 1);

$res = $db->getList();

//var_dump($res);
//header('Content-Type: text/plain; charset=utf-8');
//header('Content-Type: application/json; charset=utf-8');

//echo json_encode($res, MY_JSON_OPTIONS);

sendResponse($res);
?>
