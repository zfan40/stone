(function() {
	'use strict';
	var app = angular.module("app");
	var controllerID = "ShowInventoryController";
	app.controller(controllerID,["$scope","$location","$routeParams",inventory]);



	function inventory($scope,$location,$routeParams) {
	$scope.stoneId = $routeParams.stoneId;
	//$http request, send stoneId, get following info
	$scope.fullName;
	$scope.stoneCode;
	$scope.mainColor;
	$scope.veinColor;
	$scope.originLocation;
	$scope.shipLocation;
	$scope.mainImage; //or a list?


	}
})()