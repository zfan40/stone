(function() {
	'use strict';
	var app = angular.module("app");
	var controllerID = "ShowInventoryController";
	app.controller(controllerID,["$scope","$location","$routeParams","datacontext",inventory]);



	function inventory($scope,$location,$routeParams,datacontext) {
		$scope.inventoryId = $routeParams.inventoryId;
		datacontext.getInventoryInfo($scope.inventoryId)
			.then(function(data) {
				var result = data.data.data;
					// $scope.stoneId = $routeParams.inventoryId;
					//$http request, send stoneId, get following info
					// console.log(result);
					$scope.fullName=result.fullName;
					$scope.generalName=result.generalName;//should be returned from backend
					$scope.generalDescription = result.generalDescription;
					$scope.stoneCategory=result.stoneCategory;
					$scope.companyCnAlias=result.companyCnAlias;
					$scope.companyEnAlias = result.companyEnAlias;
					$scope.originLocation=result.originLocation;
					$scope.shipLocation=result.shipLocation;			
					$scope.price = result.price;
					$scope.stoneBoardImageUrl = result.stoneBoardImageUrl;
					$scope.stoneProductImageUrl = result.stoneProductImageUrl;
					$scope.cases = result.cases;
			})
	
	}
})()