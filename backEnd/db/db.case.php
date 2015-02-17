<?php
include_once('db.php');

//
// 公司表
//
class CaseModel extends Model {
	public function __construct() {
		parent::__construct('`case`');
	}

	/**
	 * 获取一个公司信息
	 * @param $condition  key-value数组，要搜索的条件
	 * @param $keys       要获取哪些列 
	 * @param $count      要获取多少行数据
	 */
	 public function getByInventoryId($inventoryId, $count=20) {
		$keys = array('title', 'description as text', 'imageLarge as image');
		$condition = array('inventoryId'=>$inventoryId);
		return $this->search($condition, $keys, $count);
	 }
}
?>
