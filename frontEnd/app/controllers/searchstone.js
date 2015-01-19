(function() {
	'use strict';
	var app = angular.module("app");
	var controllerID = "SearchStoneController";
	app.controller(controllerID,["$scope","$location",findcolor]);



	function findcolor($scope,$location) {

	$scope.maincolor = [0,0,0];
	$scope.deccolor = [0,0,0];
		
	function initColorView() {
		$("#maincolor").spectrum({
			allowEmpty:true,
			clickoutFiresChange: true,
			change: function(tinycolor) { if (tinycolor) {$scope.maincolor = [tinycolor._r,tinycolor._g,tinycolor._b]; retrieveByColor();}}
		});
		$("#deccolor").spectrum({
			allowEmpty:true,
			clickoutFiresChange: true,
			change:function(tinycolor) { if (tinycolor) {$scope.deccolor = [tinycolor._r,tinycolor._g,tinycolor._b]; retrieveByColor();}}
		});		
	}

	function getMainColor() {
		$("#maincolor").spectrum('get')._r
	}

	function getDecorationColor() {

	}

	function retrieveByColor() {
		console.log($scope.maincolor + ' ' +$scope.deccolor);
	}


	initColorView();

	}
})()