var app = angular.module('app');
app.controller('ZoomController', ['$scope', '$timeout', function($scope,$timeout) {
  //  $scope.myInterval = $scope.interval;
  // // $scope.slides = [{image:'http://placekitten.com/601/300',text:'to be no.1'},{image:'http://placekitten.com/602/300',text:'to be no.2'},{image:'http://placekitten.com/603/300',text:'to be no.3'}];
  //  $scope.slides = $scope.imageList;
  $scope.largeUrl = $scope.imageList[0].image;
  $scope.shit = 'myshow';


  function fadeInImage(index) {
      // $('.bigshow').fadeOut("slow",function(){
      //   $scope.$apply(function(){
      //       $scope.largeUrl = $scope.imageList[index].image;
      //       $('.bigshow').fadeIn();
      //   })
      // });
      // $scope.$apply(function(){$scope.shit = 'mydisappear';});
      $scope.shit = 'mydisappear';
      $timeout(function(){
          $scope.shit = 'myshow';
          $scope.largeUrl = $scope.imageList[index].image;
      },500);

      // console.log(index);
  }
  $scope.fadeInImage = fadeInImage;
}])

app.directive('zoomShow', function() {
  return {
  	restrict: 'E',
    templateUrl: 'app/directives/zoom/zoom.html',
    scope:{
  			imageList: '='					// => image-list

  	}
  };
});