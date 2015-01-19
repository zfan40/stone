(function() {
	'use strict';
	var app = angular.module("app");
	var controllerID = "MainPageController";
	app.controller(controllerID,["$scope","$location",ad]);

	function ad($scope,$location) {
		$scope.http_json = {
			img_url: [
				"http://img.stonebuy.com/service/images/2014-07/20147211422569612.gif",
				"http://img.stonebuy.com/service/images/2014-10/201410211630116058.gif",
				"http://img.stonebuy.com/service/images/2014-01/20141271143411688.gif",
				"http://img.stonebuy.com/service/images/2014-12/2014122849135645.gif",
				"http://img.stonebuy.com/service/images/2014-10/201410161542207240.gif"
			]
		};

		$scope.abc = "wocao";
	}
})()