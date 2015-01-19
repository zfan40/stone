angular.module('app', [
    'ngRoute',
    'ui.bootstrap',
    // Top level modules only
    'auth',
    'login',
    'pets'
])

    .config(['$compileProvider', '$routeProvider', '$locationProvider', function ($compileProvider, $routeProvider, $locationProvider){
        $compileProvider.aHrefSanitizationWhitelist(/^\s*(https?|ftp|mailto|file|tel):/);
        // $locationProvider.html5Mode(true);
        $routeProvider
            .when('/login', {
                templateUrl: 'app/views/login.tpl.html',
                controller: 'LoginCtrl',

                // You do not need to be logged in to go to this route.
                requireLogin: false
            })

            .when('/main', {
                templateUrl: 'app/views/main.tpl.html',
                controller: 'MainPageController',

                // You must be logged into go to this route.
                requireLogin: false
            })

            .when('/find', {
                templateUrl: 'app/views/searchstone.tpl.html',
                controller: 'SearchStoneController',
                requireLogin: false
            })

            .when('/pet/:petId', {
                templateUrl: 'app/pets/pet/pet.tpl.html',
                controller: 'PetCtrl',
                requireLogin: true
            });

        // If the url is unrecognized go to login
        $routeProvider.otherwise({
            redirectTo: '/login'
        });
    }])

    .run(['$rootScope', 'AuthService', '$location', function($rootScope, AuthService, $location){
        // Everytime the route in our app changes check auth status
        $rootScope.$on("$routeChangeStart", function(event, next, current) {
            // if you're logged out send to login page.
            if (next.requireLogin && !AuthService.getUserAuthenticated()) {
                $location.path('/login');
                event.preventDefault();
            }
        });
    }])

    .controller('MainCtrl', ['$scope', 'AuthService', '$location', function($scope, AuthService, $location) {
        $scope.logoutUser = function() {
            // run a logout function to your api
            AuthService.setUserAuthenticated(false);
            $location.path('/login');
        };

        $scope.isLoggedIn = function() {
            return AuthService.getUserAuthenticated();
        };
    }]);
