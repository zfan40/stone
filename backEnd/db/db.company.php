<?php
include_once('db.php');

//
// 公司表
//
class CompanyModel extends Model {
	public function __construct() {
		parent::__construct('company');
	}

	/**
	 * 获取一个公司信息
	 * @param $condition  key-value数组，要搜索的条件
	 * @param $keys       要获取哪些列 
	 * @param $count      要获取多少行数据
	 */
	 public function getByEnAlias($enAlias, $count=20) {
		$keys = array('companyId', 'enAlias', 'cnFullName', 'logoUrl',
			'cnAlias', 'companyDescription', 'properties', 'website',
			'employeeAmount', 'foundDate', 'contactPerson', 'contactNumber',
			'companyDetail', 'nation', 'state', 'city', 'address');
		$condition = array('enAlias'=>$enAlias);
		return $this->searchOne($condition, $keys);
	 }
}
?>
