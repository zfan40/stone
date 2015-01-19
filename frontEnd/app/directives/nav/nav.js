var app = angular.module('app');
app.controller('NavDirController', ['$scope', function($scope) {
  $scope.customer;
}])
app.directive('navBar', function() {
  return {
  	restrict: 'E',
    templateUrl: 'app/directives/nav/nav.html'
  };
});