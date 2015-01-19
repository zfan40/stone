angular.module('pet', [])

    .controller('PetCtrl', function($scope, $routeParams, Pets) {
        // "Pets" is a service returning mock data (services.js)
        $scope.pet = Pets.get($routeParams.petId);
    });