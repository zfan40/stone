(function() {
	'use strict';
	var app = angular.module("app");
	var controllerID = "SearchInventoryController";
	app.controller(controllerID,["$scope","$location",searchInventory]);


	function searchInventory($scope,$location) {


		$scope.stoneCode;
		$scope.stoneName;
		$scope.stoneCategory;
			$scope.categoryOptions = ['大理石','花岗岩'];
		$scope.originLocation;
			$scope.originOptions = ['北京','上海','深圳','东莞'];
		$scope.mainColor=undefined;
		$scope.veinColor=undefined;
		$scope.shipLocation;
			$scope.shipOptions = ['北京','上海','深圳','东莞'];
		$scope.standard;
			$scope.standardOptions = ['50*2','51*2','50*3','51*3','原料'];
		$scope.storagemin=0;
		$scope.storagemax=1000;
		$scope.storagetext = '无限制';
		$scope.pricemin=0;
		$scope.pricemax=100;
		$scope.pricetext = '无限制';
		$scope.page = 1;

		//returned example
		$scope.inventories = [
			{
				inventoryId:1,
				stoneImageUrl:'images/board/1.jpg',
				fullName:'戈壁彩',
				stoneCategory:'大理石',
				shipLocation:'新疆',
				standard:'50*2',
				storage:'5吨',
				price:'20w',
				stoneCode:'2B001'
			},
			{
				inventoryId:2,
				stoneImageUrl:'images/board/2.jpg',
				fullName:'黄金钻',
				stoneCategory:'花岗岩',
				shipLocation:'新疆',
				standard:'50*2',
				storage:'5吨',
				price:'10w',
				stoneCode:'NB001'
			},
			{
				inventoryId:3,
				stoneImageUrl:'images/board/3.jpg',
				fullName:'蜘蛛玉',
				stoneCategory:'大理石',
				shipLocation:'新疆',
				standard:'50*3',
				storage:'100吨',
				price:'30w',
				stoneCode:'NB007'
			},
			{
				inventoryId:4,
				stoneImageUrl:'images/board/4.jpg',
				fullName:'银貂',
				stoneCategory:'大理石',
				shipLocation:'新疆',
				standard:'50*2',
				storage:'50吨',
				price:'100w',
				stoneCode:'SB001'
			}
		];


		
	function initColorView() {
		$("#maincolor").spectrum({
			allowEmpty:true,
			clickoutFiresChange: true,
			change:function(tinycolor) { 
				$scope.$apply(function() {
					if (tinycolor) {$scope.mainColor = [tinycolor._r,tinycolor._g,tinycolor._b];}
				})
			}
		});
		$("#deccolor").spectrum({
			allowEmpty:true,
			clickoutFiresChange: true,
			change:function(tinycolor) { 
				$scope.$apply(function() {
					if (tinycolor) {$scope.veinColor = [tinycolor._r,tinycolor._g,tinycolor._b];}
				})
			}
		});		
	}

	function initRangeView() {


		$('#pricerange').slider({
    		range: true,
    		values: [0,100],
    		slide: function (event, ui) {
        		$scope.$apply(function(){
        			console.log(ui.values[0]+' '+ui.values[1]);
        			$scope.pricemin=ui.values[0];
        			$scope.pricemax=ui.values[1];
        			console.log($scope.pricemin+' '+$scope.pricemax);
        			if ($scope.pricemin == 0 && $scope.pricemax == 100)
        				$scope.pricetext = '无限制';
        			else if($scope.pricemin == $scope.pricemax) {
        				$scope.pricetext = ''+$scope.pricemax+'(万/吨)';
        			}
        			else {
        				$scope.pricetext = ""+$scope.pricemin+' ~ '+$scope.pricemax+'(万/吨)';     				
        			}
        			console.log($scope.pricetext);
        		})
    		}
		});

		$('#storagerange').slider({
    		range: true,
    		values: [0,1000],
    		slide: function (event, ui) {
        		$scope.$apply(function(){
        			console.log(ui.values[0]+' '+ui.values[1]);
        			$scope.storagemin=ui.values[0]*10;
        			$scope.storagemax=ui.values[1]*10;
        			console.log($scope.storagemin+' '+$scope.storagemax);
        			if ($scope.storagemin == 0 && $scope.storagemax == 1000)
        				$scope.storagetext = '无限制';
        			else if($scope.storagemin == $scope.storagemax) {
        				$scope.storagetext = ''+$scope.storagemax+'(吨)';
        			}
        			else {
        				$scope.storagetext = ""+$scope.storagemin+' ~ '+$scope.storagemax+'(吨)';     				
        			}
        			console.log($scope.storagetext);
        		})
    		}
		});
	}
	function getMainColor() {
		$("#maincolor").spectrum('get')._r
	}

	function getDecorationColor() {

	}


	initColorView();
	initRangeView();
	}
})()






















