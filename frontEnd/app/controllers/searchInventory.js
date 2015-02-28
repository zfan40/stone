(function() {
	'use strict';
	var app = angular.module("app");
	var controllerID = "SearchInventoryController";
	app.controller(controllerID,["$scope","$location","datacontext",searchInventory]);


	function searchInventory($scope,$location,datacontext) {


		$scope.stoneCode = undefined;
		$scope.stoneName = '';
		$scope.stoneCategory = undefined;
			$scope.categoryOptions = ['大理石','花岗岩'];
		$scope.originLocation = undefined;
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

		//functions declarations
		$scope.reset = reset;
		$scope.apply = apply;

		function reset() {		
			$scope.stoneCode = undefined;
			$scope.stoneName = '';
			$scope.stoneCategory = undefined;
			$scope.originLocation = undefined;
			$scope.mainColor = undefined;
			$scope.veinColor = undefined;
			$scope.shipLocation = undefined;
			$scope.standard = undefined;
			$scope.storagemin=0;
			$scope.storagemax=1000;
			$scope.pricemin=0;
			$scope.pricemax=100;
			$scope.page = 1;

			// $('.sp-clear').click();
			// initColorView();
			initRangeView();

			$scope.pricetext = '无限制';
			$scope.storagetext = '无限制';
			console.log("all filters are reset");
			console.log($scope.mainColor);
		}

		function apply() {
			var params = {
				stoneCode: $scope.stoneCode,
				name: $scope.stoneName,
				stoneCategory: $scope.stoneCategory,
				originLocation: $scope.originLocation,
				mainColor: JSON.stringify($scope.mainColor),
				veinColor: JSON.stringify($scope.veinColor),
			    shipLocation: $scope.shipLocation,
			    standard: $scope.standard,
			    // storage: [$scope.storagemin,$scope.storagemax],
			    // price: [$scope.pricemin, $scope.pricemax],
			    page: undefined,
			}

			console.log("searching for the stones...with");
			console.log(params);
			datacontext.getSearchedInventories(params)
				.then(function(data) {
					var result = data.data.data;
					if (result.length >=1)
						$scope.found = true;
					else 
						$scope.found = false;

					$scope.inventories = result;

					// $scope.inventories = [
					// {
					// 	inventoryId:1,
					// 	stoneImageUrl:'images/board/1.jpg',
					// 	fullName:'戈壁彩',
					// 	stoneCategory:'大理石',
					// 	shipLocation:'新疆',
					// 	standard:'50*2',
					// 	storage:'5吨',
					// 	price:'20w',
					// 	stoneCode:'2B001'
					// },
					// {
					// 	inventoryId:2,
					// 	stoneImageUrl:'images/board/2.jpg',
					// 	fullName:'黄金钻',
					// 	stoneCategory:'花岗岩',
					// 	shipLocation:'新疆',
					// 	standard:'50*2',
					// 	storage:'5吨',
					// 	price:'10w',
					// 	stoneCode:'NB001'
					// },
					// ]
				});
		}

		//returned example
		// $scope.inventories = [
		// 	{
		// 		inventoryId:1,
		// 		stoneImageUrl:'images/board/1.jpg',
		// 		fullName:'戈壁彩',
		// 		stoneCategory:'大理石',
		// 		shipLocation:'新疆',
		// 		standard:'50*2',
		// 		storage:'5吨',
		// 		price:'20w',
		// 		stoneCode:'2B001'
		// 	},
		// 	{
		// 		inventoryId:2,
		// 		stoneImageUrl:'images/board/2.jpg',
		// 		fullName:'黄金钻',
		// 		stoneCategory:'花岗岩',
		// 		shipLocation:'新疆',
		// 		standard:'50*2',
		// 		storage:'5吨',
		// 		price:'10w',
		// 		stoneCode:'NB001'
		// 	},
		// 	{
		// 		inventoryId:3,
		// 		stoneImageUrl:'images/board/3.jpg',
		// 		fullName:'蜘蛛玉',
		// 		stoneCategory:'大理石',
		// 		shipLocation:'新疆',
		// 		standard:'50*3',
		// 		storage:'100吨',
		// 		price:'30w',
		// 		stoneCode:'NB007'
		// 	},
		// 	{
		// 		inventoryId:4,
		// 		stoneImageUrl:'images/board/4.jpg',
		// 		fullName:'银貂',
		// 		stoneCategory:'大理石',
		// 		shipLocation:'新疆',
		// 		standard:'50*2',
		// 		storage:'50吨',
		// 		price:'100w',
		// 		stoneCode:'SB001'
		// 	}
		// ];


		
	function initColorView() {
		$("#maincolor").spectrum({
			allowEmpty:true,
			clickoutFiresChange: true,
			change:function(tinycolor) { 
				$scope.$apply(function() {
					if (tinycolor) {
						$scope.mainColor = [parseInt(tinycolor._r),parseInt(tinycolor._g),parseInt(tinycolor._b)];
						console.log('new mainColor is'+$scope.mainColor);
					}
				})
			}
		});
		$("#deccolor").spectrum({
			allowEmpty:true,
			clickoutFiresChange: true,
			change:function(tinycolor) { 
				$scope.$apply(function() {
					if (tinycolor) {$scope.veinColor = [parseInt(tinycolor._r),parseInt(tinycolor._g),parseInt(tinycolor._b)];}
				})
			}
		});	
		$(".sp-clear:eq(0)").click(function(){
				$scope.mainColor=undefined;
		});	
		$(".sp-clear:eq(1)").click(function(){
				$scope.veinColor=undefined;
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
	apply();
	}
})()






















