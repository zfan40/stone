(function() {
	'use strict';
	var app = angular.module("app");
	var controllerID = "ShowCompanyController";
	app.controller(controllerID,["$scope","$location","$routeParams",company]);



	function company($scope,$location,$routeParams) {

	$scope.companyId = $routeParams.companyId;//either id or alias as pass-in
	$scope.alias = $routeParams.alias;//either id or alias as pass-in 

	$scope.fullName = "中恒汇金石业（北京）股份有限公司";
	$scope.logoUrl="images/logo/1.jpg";
	$scope.translatedAlias="中恒汇金";//chinese
	$scope.companyDescription="精诚所至 金石为开";
	
	$scope.categories = ["股份","自有矿山","经销商"];
	$scope.website="http://www.marble-huijin.com";//short string
	$scope.employeeAmount = 500;//int
	$scope.foundDate="2012/09/22";//date?
	
	//$scope.founders = [];
	$scope.contactPerson="王颖伟";
	$scope.contactNumber="13718128622";

	$scope.companyDetail="中恒汇金是集文化产业、金融投资、矿山开发、工业园区开发为一体的实业控股集团公司。营运总部设在首都CBD区亮马河大厦。 \
  目前集团拥有中恒汇金（北京）股份有限公司、新疆汇金石业、库木塔格丽山矿区、汇金石业产业园区等机构。 \
  中恒汇金石业（北京）股份有限公司是集矿山开采、生产加工、品牌运营、进出口贸易、仓储物流、技术研发及大型工程承接为一体的大型集团公司。公司所拥有的9.6平方公里新疆库木塔格戈壁丽山矿是中国最大的玉化大理石矿山，年开采荒料5万立方米，年加工大板能力达150万平方米，产品极具玉质纹理与花色，突显出其高贵典雅的气质。\
  公司在新疆鄯善县投资建设的汇金石业工业园，占地333.8亩，总投资规划2.6亿元人民币，并购置国内外先进的生产、加工、运输、检测、环保等设备。厂区总面积22.3万平方米，建筑面积12万平方米，设有办公楼、会所、高管楼、员工宿舍楼、生产加工车间以及娱乐区，将成为中国规模最大、设备最全的大理石生产加工基地。\
  中恒汇金以\“创造财富 创意美好未来\”为美好愿景，创造具有国际竞争力的多元化企业集团。";
	
	$scope.nation="中国";
	$scope.state="北京";//province
	$scope.city="北京";
	$scope.address="北京市朝阳区东三环北路8号亮马河大厦1座2层";//

	$scope.inventories = [
		{
			inventoryId:1,
			stoneImageUrl:'images/board/1.jpg',
			fullName:'戈壁彩',
			stoneCategory:'大理石',
			shipLocation:'新疆',
			standard:'50x2',
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
			standard:'50x2',
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
	$scope.caseShow = [{image:'images/case/1_1440x1024.jpg',text:'to be no.1'},{image:'images/case/2_1440x1024.jpg',text:'to be no.2'},{image:'images/case/3_1440x1024.jpg',text:'to be no.3'},{image:'images/case/3_1440x1024.jpg',text:'to be no.3'}];
	}
})()