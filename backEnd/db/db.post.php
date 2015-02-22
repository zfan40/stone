<?php
include_once('db.php');

//
// 资讯表
//
class PostModel extends Model {
	public function __construct() {
		parent::__construct('`post`');
	}

	/**
	 * 获取一个公司信息
	 * @param $page       要获取第几页数据
	 * @param $count      要获取多少行数据
	 */
	 public function getList($page=1, $count=20) {
	 	$start = ($page-1) * $count;
	 	$sql = "select postId, postTitle, postDate, postImage, postAbstract, postType, p.postTypeId, color
			from post p, postType pt where p.postTypeId=pt.postTypeId limit $start, $count";
		$records = $this->conn->query($sql);
		$res = $this->fetch_all($records);//$res->fetch_all(MYSQLI_ASSOC);
		return $res;
	 }
}
?>
