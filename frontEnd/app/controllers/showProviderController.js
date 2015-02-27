(function() {
	'use strict';
	var app = angular.module("app");
	var controllerID = "ShowProviderController";
	app.controller(controllerID,["$scope","$location","$routeParams","datacontext",provider]);



	function provider($scope,$location,$routeParams,datacontext) {
	// $scope.companyId = $routeParams.providerId;//either id or alias as pass-in
	$scope.alias = $routeParams.providerId;//either id or alias as pass-in 
	console.log($scope.alias);
	datacontext.getCompanyInfo($scope.alias)
		.then(function(data) {			
			var result = data.data.data;
			$scope.fullName = result.cnFullName;
			$scope.logoUrl=result.logoUrl;
			$scope.translatedAlias=result.cnAlias;
			$scope.companyDescription=result.companyDescription;
			if(result.properties) $scope.categories = result.properties.split(",");
			$scope.website=result.website;//short string
			$scope.employeeAmount = result.employeeAmount;//int
			$scope.foundDate=result.foundDate;//date?			
			//$scope.founders = [];
			$scope.contactPerson=result.contactPerson;
			$scope.contactNumber=result.contactNumber;
			$scope.companyDetail=result.companyDetail;
			$scope.nation=result.nation;
			$scope.state=result.state;//province
			$scope.city=result.city;
			$scope.address=result.address;//
			$scope.inventories = result.inventories;
			$scope.caseShow = result.caseShow;
		});
	// $scope.caseShow = [{image:'images/case/1_1440x1024.jpg',text:'to be no.1'},{image:'images/case/2_1440x1024.jpg',text:'to be no.2'},{image:'images/case/3_1440x1024.jpg',text:'to be no.3'},{image:'images/case/3_1440x1024.jpg',text:'to be no.3'}];
	}
})()