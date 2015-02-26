<?php
include_once('db.php');

//
// 案例表
//
class CaseModel extends Model {
	public function __construct() {
		parent::__construct('`case`');
	}

	/**
	 * 获取一个存货的案例信息
	 * @param $inventoryId  存货ID
	 * @param $count        要获取多少行数据
	 */
	public function getByInventoryId($inventoryId, $count=20) {
		$keys = array('title', 'description as text', 'imageLarge as image');
		$condition = array('inventoryId'=>$inventoryId);
		return $this->search($condition, $keys, $count);
	}

	/**
	 * 获取一个公司的案例信息
	 * @param $companyId  公司ID
	 * @param $count        要获取多少行数据
	 */
	public function getByCompanyId($companyId, $count=20) {
		$keys = array('title as text', 'imageLarge as image');
		$condition = array('companyId'=>$companyId);
		return $this->search($condition, $keys, $count);
	}
}
?>
