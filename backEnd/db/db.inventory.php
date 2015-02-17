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
			$res[$k]['stoneImageUrl'] = is_array($urls) && isset($urls[0]) && isset($urls[0]['image']) ? $urls[0]['image'] : '';
			unset($res[$k]['stoneBoardImageUrl']);
		}
		return $res;
	}

	/**
	 * 搜索存货列表
	 * @param $condition  搜索条件
	 * @param $count      要获取多少行数据
	 */
	public function search($condition, $errorFn, $count=20) {
		// 这个搜索条件比较复杂
		$conditionCount = 0;
		$conditionArr = array();
		if (isset($condition['stoneCode'])) {
			$conditionArr[] = "stoneCode like '%{$condition['stoneCode']}%'";
			$conditionCount++;
		}
		if (isset($condition['name'])) {
			$conditionArr[] = "(st.fullName like '%{$condition['name']}%' or st.nickName like '%{$condition['name']}%')";
			$conditionCount++;
		}
		if (isset($condition['stoneCategory'])) {
			$conditionArr[] = "stoneCategory = '{$condition['stoneCategory']}'";
			$conditionCount++;
		}
		if (isset($condition['originLocation'])) {
			$conditionArr[] = "originLocation = '{$condition['originLocation']}'";
			$conditionCount++;
		}
		if (isset($condition['mainColor'])) { // 颜色需在查询之后再过滤
			if ( !(isset($condition['mainColor'][0]) && 
				isset($condition['mainColor'][1]) &&
				isset($condition['mainColor'][2]) ) )
				$errorFn(null, -1, 'mainColor format error: must be [r, g, b]');
			$r = $condition['mainColor'][0];
			$g = $condition['mainColor'][1];
			$b = $condition['mainColor'][2];
			if (!is_int($r) || !is_int($g) || !is_int($b)) 
				$errorFn(null, -1, 'mainColor format error: not numeric');
			$conditionCount++;
		}
		if (isset($condition['veinColor'])) { // 颜色需在查询之后再过滤
			if ( !(isset($condition['veinColor'][0]) && 
				isset($condition['veinColor'][1]) &&
				isset($condition['veinColor'][2]) ) )
				$errorFn(null, -1, 'veinColor format error: must be [r, g, b]');
			$r = $condition['veinColor'][0];
			$g = $condition['veinColor'][1];
			$b = $condition['veinColor'][2];
			if (!is_int($r) || !is_int($g) || !is_int($b)) 
				$errorFn(null, -1, 'veinColor format error: not numeric');
			$conditionCount++;
		}
		if (isset($condition['shipLocation'])) {
			if ( !(isset($condition['shipLocation'][0]) && isset($condition['shipLocation'][1])) )
				$errorFn(null, -1, 'shipLocation format error, must be ["nation", "state"]');
			$nation = $condition['shipLocation'][0];
			$state = $condition['shipLocation'][1];
			$conditionArr[] = "shipLocation like '%$nation%' and shipLocation like '%$state%'";
			$conditionCount++;
		}
		if (isset($condition['standard'])) {
			$conditionArr[] = "standard='{$condition['standard']}'";
			$conditionCount++;
		}
		if (isset($condition['storage'])) {
			if ( !array_key_exists(0, $condition['storage']) || !array_key_exists(1, $condition['storage']) )
				$errorFn(null, -1, 'storage format error, must be [from, to]');
			$from = $condition['storage'][0];
			$to = $condition['storage'][1];
			if ( !($from==null || is_numeric($from)) || !($to==null || is_numeric($to)) )
				$errorFn(null, -1, 'storage format error: value must be null or number');
			if ($from==null && $to==null)
				$errorFn(null, -1, 'storage format error: from and to should not be both null');
			if ($from)
				$conditionArr[] = "storage >= $from";
			if ($to)
				$conditionArr[] = "storage <= $to";
			$conditionCount++;
		}
		if (isset($condition['price'])) {
			if ( !array_key_exists(0, $condition['price']) || !array_key_exists(1, $condition['price']) )
				$errorFn(null, -1, 'price format error, must be [from, to]');
			$from = $condition['price'][0];
			$to = $condition['price'][1];
			if ( !($from==null || is_numeric($from)) || !($to==null || is_numeric($to)) )
				$errorFn(null, -1, 'price format error: value must be null or number');
			if ($from==null && $to==null)
				$errorFn(null, -1, 'price format error: from and to should not be both null');
			if ($from)
				$conditionArr[] = "price >= $from";
			if ($to)
				$conditionArr[] = "price <= $to";
			$conditionCount++;
		}
		if ($conditionCount==0) {
			$errorFn(null, -1, 'no condition specified');
		}
		$conditionStr = implode(' and ', $conditionArr);
		if (!empty($conditionStr)) {
			$conditionStr = ' and ' . $conditionStr;
		}
		$page = isset($condition['page']) ? $condition['page'] : 1;
		if (!is_int($page) || $page <= 0)
			$page = 1;
		$start = ($page-1) * $count;

		// 开始查询
		$sql = "select inventoryId, stoneBoardImageUrl, st.fullName,
			stoneCategory, shipLocation, standard, storage, price, stoneCode,
			mainColor, veinColor
			from {$this->tablename} inv, stone st 
			where inv.stoneId=st.stoneId {$conditionStr} limit {$start}, {$count}";
		var_dump($sql);
		$records = $this->conn->query($sql);// or die($this->conn->error);
		$res = $records->fetch_all(MYSQLI_ASSOC);
		$finalRes = array();
		$thres = 20; // 颜色按照这个误差进行搜索
		foreach($res as $k => $row) {
			$urls = json_decode($row['stoneBoardImageUrl'], true);
			$row['stoneImageUrl'] = is_array($urls) && isset($urls[0]) && isset($urls[0]['image']) ? $urls[0]['image'] : '';
			$isAdd = false;
			// 查询后的过滤
			if (isset($condition['mainColor'])) {
				//var_dump($condition['mainColor'], $row['mainColor']);
				$conR = (int)$condition['mainColor'][0];
				$conG = (int)$condition['mainColor'][1];
				$conB = (int)$condition['mainColor'][2];
				$color = explode(',', $row['mainColor']);
				$r=(int)$color[0]; $g=(int)$color[1]; $b=(int)$color[2];
				//var_dump(array($r, $conR));
				//var_dump(array($g, $conG));
				//var_dump(array($b, $conB));
				//var_dump($b>=$conB-$thres && $b<=$conB+$thres);
				if ($r>=$conR-$thres && $r<=$conR+$thres &&
					$g>=$conG-$thres && $g<=$conG+$thres &&
					$b>=$conB-$thres && $b<=$conB+$thres)
					$isAdd = true;
			}
			if (isset($condition['veinColor'])) {
				$conR = (int)$condition['veinColor'][0];
				$conG = (int)$condition['veinColor'][1];
				$conB = (int)$condition['veinColor'][2];
				$color = explode(',', $row['veinColor']);
				$r=$color[0]; $g=$color[1]; $b=$color[2];
				if ($r>=$conR-$thres && $r<=$conR+$thres &&
					$g>=$conG-$thres && $g<=$conG+$thres &&
					$b>=$conB-$thres && $b<=$conB+$thres)
					$isAdd = true;
			}
			if (!isset($condition['mainColor']) && !isset($condition['veinColor'])) {
				$isAdd = true;
			}

			//var_dump($isAdd);
			if ($isAdd===true) {
				//var_dump('hehe');
				unset($row['stoneBoardImageUrl']);
				//unset($row['mainColor']);
				//unset($row['veinColor']);
				$finalRes[] = $row;
			}
		}
		return $finalRes;
	}

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
