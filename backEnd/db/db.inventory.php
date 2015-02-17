<?php
include_once('db.php');

//
// 存货表
//
class InventoryModel extends Model {
	public function __construct() {
		parent::__construct('inventory');
	}

	/**
	 * 获取一个公司的存货列表
	 * @param $companyId  公司ID
	 * @param $count      要获取多少行数据
	 */
	 public function getList($companyId, $count=20) {
	 	$conditionStr = $this->getConditionStr(array('companyId'=>$companyId));
		$sql = "select inventoryId, stoneBoardImageUrl, st.fullName,
			stoneCategory, shipLocation, standard, storage, price, stoneCode
			from {$this->tablename} inv, stone st 
			where inv.stoneId=st.stoneId and {$conditionStr} limit 0, {$count}";
		$records = $this->conn->query($sql);
		$res = $records->fetch_all(MYSQLI_ASSOC);
		foreach($res as $k => $row) {
			$urls = json_decode($row['stoneBoardImageUrl'], true);
			//var_dump($row['stoneBoardImageUrl']);
			//var_dump($urls);
			//die('123');
			$res[$k]['stoneImageUrl'] = is_array($urls) && isset($urls[0]) && isset($urls[0]['image']) ? $urls[0]['image'] : '';
			unset($res[$k]['stoneBoardImageUrl']);
		}
		return $res;
	}

	/**
	 * 
	 */

	/**
	 * 获取一个存货信息
	 * @param 
	 */
	public function getById($inventoryId) {
		$keys = array('inventoryId', 'stoneId', 'companyId',
			'mainColor', 'veinColor', 'shipLocation', 
			'stoneBoardImageUrl', 'stoneProductImageUrl',
			'standard', 'storage', 'price');
		$res = $this->searchOne(array('inventoryId'=>$inventoryId), $keys);
		//var_dump($res);
		if (is_array($res) && !empty($res)) {
			$res['mainColor'] = explode(',', $res['mainColor']);
			$res['veinColor'] = explode(',', $res['veinColor']);
			$res['stoneBoardImageUrl'] = json_decode($res['stoneBoardImageUrl'], true);
			$res['stoneProductImageUrl'] = json_decode($res['stoneProductImageUrl'], true);
		}
		return $res;
	}
}
?>
