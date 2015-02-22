<?php
include_once('db/db.post.php');
include_once('common.lib.php');

$mod = new PostModel();

//var_dump($res);
header('Content-Type: text/plain; charset=utf-8');
$res = $mod->getList();
var_dump($res);

echo json_encode($res, JSON_PRETTY_PRINT);
?>
