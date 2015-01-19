angular.module('pets', [
    // No one else is dependent on the pet module so just put it here.
    'pet'
])

    .factory('Pets', [function() {
        var pets = [
            { id: 0, title: 'Cats', description: 'Furry little creatures. Obsessed with plotting assassination, but never following through on it.' },
            { id: 1, title: 'Dogs', description: 'Lovable. Loyal almost to a fault. Smarter than they let on.' },
            { id: 2, title: 'Turtles', description: 'Everyone likes turtles.' },
            { id: 3, title: 'Sharks', description: 'An advanced pet. Needs millions of gallons of salt water. Will happily eat you.' }
        ];

        return {
            all: function() {
                return pets;
            },
            get: function(petId) {
                return pets[petId];
            }
        };
    }])

    .controller('PetsCtrl', ['$scope', 'Pets', function($scope, Pets) {

        // "Pets" is a service returning mock data (services.js)
        $scope.pets = Pets.all();

        $scope.$on('tab.shown', function() {
            // Might do a load here
        });
        $scope.$on('tab.hidden', function() {
            // Might recycle content here
        });
    }]);