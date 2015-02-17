<?php
$str = '[{"image":"images/board/1.jpg","text":"1"},{"image":"images/board/2.jpg","text":"2"},{"image":"images/board/3.jpg","text":"3"},{"image":"images/board/4.jpg","text":"4"}]';

//$str = '[1,2,3,{"a":"56/67/2.jpg"}]';
//$str = '[{"image":"images/board/1.jpg",text:"1"}]';

header("Content-Type: text/plain; charset=utf-8");
var_dump(json_decode($str, true));
?>
