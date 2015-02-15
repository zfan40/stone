var app = angular.module('app');
app.controller('NavDirController', ['$scope', function($scope) {
  $scope.customer;
  $('li').click(function(){
  	$('li').removeClass('active');
  	$(this).addClass('active');
  })
}])
app.directive('navBar', function() {
  return {
  	restrict: 'E',
    templateUrl: 'app/directives/nav/nav.html',
    scope:{
    	highlight: '='
    }
  };
});