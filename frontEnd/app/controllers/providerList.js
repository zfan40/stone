//change var name according to new naming convention in Spreadsheet
(function() {
	'use strict';
	var app = angular.module("app");
	var controllerID = "ProviderListController";
	app.controller(controllerID,["$scope","$location","datacontext", providerList]);


	function providerList($scope,$location,datacontext) {
		//returned example
		datacontext.getCompanyList()
			.then(function(data) {
				var result = data.data.data;
				$scope.companies = result;
			})
		// $scope.companies = [
		// 	{
		// 		companyId : 1,//either id or alias as pass-in
		// 		alias : "zhhj",//either id or alias as pass-in 
		// 		logoUrl:"images/logo/1.jpg",
		// 		translatedAlias:"中恒汇金",//chinese
		// 		companyDescription:"精诚所至 金石为开",
		// 		categories : ["股份"],
		// 		employeeAmount : 500,//int
		// 		foundDate:"2012/09/22",//date?				
		// 		nation:"中国",
		// 		state:"北京",//province
		// 		city:"北京"
		// 	},
		// 	{
		// 		companyId : 2,//either id or alias as pass-in
		// 		alias : "zhhy",//either id or alias as pass-in 
		// 		logoUrl:"images/logo/2.jpg",
		// 		translatedAlias:"中恒汇银",//chinese
		// 		companyDescription:"精诚所至 银石为开",
		// 		categories : ["股份","经销商"],
		// 		employeeAmount : 200,//int
		// 		foundDate:"2013/09/22",//date?				
		// 		nation:"中国",
		// 		state:"北京",//province
		// 		city:"北京"
		// 	},
		// 	{
		// 		companyId : 3,//either id or alias as pass-in
		// 		alias : "zhhj",//either id or alias as pass-in 
		// 		logoUrl:"images/logo/1.jpg",
		// 		translatedAlias:"中恒汇金",//chinese
		// 		companyDescription:"精诚所至 金石为开",
		// 		categories : ["股份","自有矿山","经销商"],
		// 		employeeAmount : 500,//int
		// 		foundDate:"2012/09/22",//date?				
		// 		nation:"中国",
		// 		state:"北京",//province
		// 		city:"北京"
		// 	},
		// 	{
		// 		companyId : 4,//either id or alias as pass-in
		// 		alias : "zhhj",//either id or alias as pass-in 
		// 		logoUrl:"images/logo/1.jpg",
		// 		translatedAlias:"中恒汇金",//chinese
		// 		companyDescription:"精诚所至 金石为开",
		// 		categories : ["股份","自有矿山","经销商"],
		// 		employeeAmount : 500,//int
		// 		foundDate:"2012/09/22",//date?				
		// 		nation:"中国",
		// 		state:"北京",//province
		// 		city:"北京"
		// 	},
		// 	{
		// 		companyId : 5,//either id or alias as pass-in
		// 		alias : "zhhj",//either id or alias as pass-in 
		// 		logoUrl:"images/logo/1.jpg",
		// 		translatedAlias:"中恒汇金",//chinese
		// 		companyDescription:"精诚所至 金石为开",
		// 		categories : ["股份","自有矿山","经销商"],
		// 		employeeAmount : 500,//int
		// 		foundDate:"2012/09/22",//date?				
		// 		nation:"中国",
		// 		state:"北京",//province
		// 		city:"北京"
		// 	},
		// 	{
		// 		companyId : 6,//either id or alias as pass-in
		// 		alias : "zhhj",//either id or alias as pass-in 
		// 		logoUrl:"images/logo/1.jpg",
		// 		translatedAlias:"中恒汇金",//chinese
		// 		companyDescription:"精诚所至 金石为开",
		// 		categories : ["股份","自有矿山","经销商"],
		// 		employeeAmount : 500,//int
		// 		foundDate:"2012/09/22",//date?				
		// 		nation:"中国",
		// 		state:"北京",//province
		// 		city:"北京"
		// 	}
		// ];

	}
})()






















