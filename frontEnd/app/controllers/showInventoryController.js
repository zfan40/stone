(function() {
	'use strict';
	var app = angular.module("app");
	var controllerID = "ShowInventoryController";
	app.controller(controllerID,["$scope","$location","$routeParams",inventory]);



	function inventory($scope,$location,$routeParams) {
	$scope.stoneId = $routeParams.inventoryId;
	//$http request, send stoneId, get following info
	$scope.fullName="";
	$scope.generalName="卷云白";
	$scope.generalDescription = "宠辱不惊,看庭前花开花落;去留无意,望天上云卷云舒。我是卷云白，我想做个石头名，但我只是汽车漆色名";
	$scope.stoneCategory="大理石";
	$scope.companyName="中恒汇金";

	$scope.originLocation="新疆";
	$scope.shipLocation="北京";
	
	$scope.price = 100;

	$scope.stoneBoardImageUrl = [{image:'images/board/1.jpg',text:'1'},{image:'images/board/2.jpg',text:'2'},{image:'images/board/3.jpg',text:'3'},{image:'images/board/4.jpg',text:'4'}];
	$scope.stoneProductImageUrl = [{image:'images/product/1.1200x800.jpg',text:'1'},{image:'images/product/2.1200x800.jpg',text:'2'},{image:'images/product/3.1200x800.jpg',text:'3'},{image:'images/product/4.1200x800.jpg',text:'4'}];
	$scope.cases = [{image:'images/case/1_1440x1024.jpg',title:'酒店大堂', text:'牛逼不牛逼，你看这个地板砖，一个字：高大上。请尽情在上面摩擦！'},{image:'images/case/2_1440x1024.jpg',text:'你看这块大独板，没有做不到只有想不到'},{image:'images/case/3_1440x1024.jpg',text:'你再来看这个大拼花，这弧度这力度，搭配黄金灯泡，逼格一下就凸显！'},{image:'images/case/3_1440x1024.jpg',text:'我们这款黑石富于现代感，更富于传统气息，在这里，设计师们搭配了金属质感莲花，让酒店装潢显得与众不同！'}];
	}
})()