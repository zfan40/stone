(function() {
	'use strict';
	var app = angular.module("app");
	var controllerID = "PostListController";
	app.controller(controllerID,["$scope","$location",postList]);


	function postList($scope,$location) {
		//returned example
		$scope.postList = [
			{
				postId : 1,//either id or alias as pass-in
				postTitle : "90后们的乐园",//either id or alias as pass-in 
				postDate : "1990/01/01",
				postImage:"images/logo/1.jpg",
				postAbstract:"这是他妈比较长的一段，吃了吗大爷？这个可是abstract，不是正文哦~,这是他妈比较长的一段，吃了吗大爷？这个可是abstract，不是正文哦~,这是他妈比较长的一段，吃了吗大爷？这个可是abstract，不是正文哦~,这是他妈比较长的一段，吃了",//chinese
				postType: "展会信息",
				postTypeId: 1

			},
			{
				postId : 1,//either id or alias as pass-in
				postTitle : "90后们的乐园",//either id or alias as pass-in 
				postDate : "1990/01/01",
				postImage:"images/logo/1.jpg",
				postAbstract:"这是他妈比较长的一段，吃了吗大爷？这个可是abstract，不是正文哦~",//chinese
				postType: "招标信息",
				postTypeId: 2
			},
			{
				postId : 1,//either id or alias as pass-in
				postTitle : "90后们的乐园",//either id or alias as pass-in 
				postDate : "1990/01/01",
				postAbstract:"这是他妈比较长的一段，吃了吗大爷？这个可是abstract，不是正文哦~",//chinese
				postType: "石材养护",
				postTypeId: 3
			},
			{
				postId : 1,//either id or alias as pass-in
				postTitle : "90后们的乐园",//either id or alias as pass-in 
				postDate : "1990/01/01",
				postImage:"images/logo/1.jpg",
				postAbstract:"这是他妈比较长的一段，吃了吗大爷？这个可是abstract，不是正文哦~",//chinese
				postType: "石材养护",
				postTypeId: 3
			},
			{
				postId : 1,//either id or alias as pass-in
				postTitle : "90后们的乐园",//either id or alias as pass-in 
				postDate : "1990/01/01",
				postImage:"images/logo/1.jpg",
				postAbstract:"这是他妈比较长的一段，吃了吗大爷？这个可是abstract，不是正文哦~",//chinese
				postType: "展会信息",
				postTypeId: 1
			},
			{
				postId : 1,//either id or alias as pass-in
				postTitle : "90后们的乐园",//either id or alias as pass-in 
				postDate : "1990/01/01",
				postImage:"images/logo/1.jpg",
				postAbstract:"这是他妈比较长的一段，吃了吗大爷？这个可是abstract，不是正文哦~",//chinese
				postType: "石材养护",
				postTypeId: 3
			}
		];

	}
})()






















