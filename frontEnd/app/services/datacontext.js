(function() {
	var serviceId = "datacontext";
	var app = angular.module('app').factory(serviceId,['$http',datacontext]);
	
	function datacontext($http) {
		
		function getCompanyInfo(enAlias) {
			console.log('requesting with enalias: '+enAlias);
			var params = {
				enAlias:enAlias
			}
			return $http({
				method: 'GET',
				url: '../backEnd/companyInfo.php',
				params:params
			});
		}

		function getCompanyList() {
			var params = {

			}
			return $http({
				method: 'GET',
				url: '../backEnd/companyList.php',
				// params:params
			});
		}

		function getSearchedInventories(params) {
			// var params = {
			// 	stoneCode: stoneCode,
			// 	name: name,
			// 	stoneCategory: stoneCategory,
			// 	originLocation: originLocation,
			// 	mainColor: mainColor,
			// 	veinColor: veinColor,
			// 	shipLocation: shipLocation,
			// 	standard: standard,
			// 	storage: storage,
			// 	price: price,
			// 	page: page
			// }
			return $http({
				method: 'GET',
				url: '../backEnd/searchInventory.php',
				params:params
			});
		}

		function getInventoryInfo(inventoryId) {
			var params = {
				inventoryId:inventoryId
			}
			return $http({
				method: 'GET',
				url: '../backEnd/inventoryInfo.php',
				params:params
			});
		}

		function getPostList(page) {
			var params = {
				page:page
			}
			return $http({
				method: 'GET',
				url: '../backEnd/postList.php',
				params:params
			});
		}

		var service = {
			getCompanyInfo:getCompanyInfo,
			getCompanyList:getCompanyList,
			getSearchedInventories:getSearchedInventories,
			getInventoryInfo:getInventoryInfo,			
			getPostList:getPostList
		}

		return service;
	}
})();