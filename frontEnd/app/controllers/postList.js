(function() {
	'use strict';
	var app = angular.module("app");
	var controllerID = "PostListController";
	app.controller(controllerID,["$scope","$location","$routeParams","datacontext",postList]);


	function postList($scope,$location,$routeParams,datacontext) {
		// $scope.postorder = 'postTypeId';
		$scope.postorder = 'postId';
		datacontext.getPostList($routeParams)
			.then(function(data) {
				var result = data.data.data;
				console.log(result);
				$scope.postList = result;
			})
		//returned example

	}
})()






















