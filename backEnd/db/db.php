<?php
include_once('common.lib.php');
/**
 * 封装了数据库的操作
 */
class Model {
	// 数据库主机地址
	protected $host = 'localhost';
	// 用户名
	protected $username = 'stone';
	// 密码
	protected $password = 'stone123';
	// 数据库名
	protected $dbname = 'stone';
	// 表名，构造时传入
	protected $tablename = '';

	// 链接对象
	protected $conn = null;
	
	/**
	 * 构造函数
	 * @param 传入表名称
	 */
	public function __construct($tablename) {
		if (empty($tablename)) 
			trigger_error('Error constructing BaseModel object: $tablename must not be null!');
		$this->tablename = $tablename;
		$this->conn = @new mysqli($this->host, $this->username, $this->password);
		if ($this->conn->connect_error)
			sendResponse(null, -1, 'cannot connect to db');
		$this->conn->select_db($this->dbname);
		$this->conn->set_charset('utf8');
	}

	/**
	 * 获取所有记录
	 * @param $keys       要获取哪些列 
	 */
	public function getAll($keys = array()) {
		$keysstr = empty($keys) ? '*' : implode(',', $keys);
		$sql = "select {$keysstr} from {$this->tablename}";
		//var_dump($sql);
		$records = $this->conn->query($sql) or die($this->conn->error);
		$res = $this->fetch_all($records);//$res = $records->fetch_all(MYSQLI_ASSOC);
		return $res;
	}

	/**
	 * 搜索记录
	 * @param $condition  key-value数组，要搜索的条件
	 * @param $keys       要获取哪些列 
	 * @param $count      要获取多少行数据
	 */
	 public function search($condition, $keys=array(), $count=20) {
		$keysstr = empty($keys) ? '*' : implode(',', $keys);
	 	$conditionStr = $this->getConditionStr($condition);
		$sql = "select {$keysstr} from {$this->tablename} where {$conditionStr} limit 0, {$count}";
		//die($sql);
		$records = $this->conn->query($sql) or die($this->conn->error);
		$res = $this->fetch_all($records);//$records->fetch_all(MYSQLI_ASSOC);
		return $res;
	 }

	/**
	 * 搜索一条记录
	 * @param $condition  key-value数组，要搜索的条件
	 * @param $keys       要获取哪些列 
	 */
	public function searchOne($condition, $keys=array()) {
	 	$res = $this->search($condition, $keys, 1);
		if (is_array($res) && isset($res[0]))
			$res = $res[0];
		return $res;
	}

	/**
	 * mysqli::fetch_all() 这个函数似乎在某些机器上不能用，这里自己做一个
	 * @param $records     mysqli_query或mysqli::query的返回值
	 */
	public function fetch_all($records) {
		$res = array();
		while($row = $records->fetch_assoc()) {
			$res[] = $row;
		}
		return $res;
	}

	/**
	 * Helper function, join condition array into a string in 
	 * the format used in 'where' clause.
	 * @param $condition
	 *   A key-value array, where key is the data base key, 
	 *   value is to be fuzzy searched.
	 * @return a string in the format used in 'where' clause
	 */
	function getConditionStr($condition, $default='false') {
		if ($condition==null || empty($condition))
			return $default;
		$conditionStr = $default;
		$conditionArr = array();
		//var_dump($condition);
		foreach($condition as $key => $val) {
			if (!empty($val)) {
				$value = mysqli_escape_string($this->conn, $val);
				if (!is_numeric($value))
					$value = "'$value'";
				if (strpos($val, '%'))
					$conditionArr[] = "$key like $value";
				else
					$conditionArr[] = "$key = $value";
			}
		}
		if (!empty($conditionArr))
			$conditionStr = implode(' and ', $conditionArr);
		return $conditionStr;
	}
};
?>
