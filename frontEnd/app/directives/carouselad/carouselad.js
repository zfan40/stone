var app = angular.module('app');
app.controller('CarouselAdController', ['$scope', function($scope) {
   $scope.myInterval = $scope.interval;
  // $scope.slides = [{image:'http://placekitten.com/601/300',text:'to be no.1'},{image:'http://placekitten.com/602/300',text:'to be no.2'},{image:'http://placekitten.com/603/300',text:'to be no.3'}];
   $scope.slides = $scope.imageList;
}])

app.directive('carouselAd', function() {
  return {
  	restrict: 'E',
    templateUrl: 'app/directives/carouselad/carouselad.html',
    scope:{
  			interval: '=',
  			imageList: '='					// => image-list

  	}
  };
});