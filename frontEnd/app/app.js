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
                requireLogin: false
            })
            .when('/main', {
                templateUrl: 'app/views/main.tpl.html',
                controller: 'MainPageController',
                requireLogin: false
            })
            // ---------------------------------------
            .when('/providers', {
                templateUrl: 'app/views/providerList.tpl.html',
                controller: 'ProviderListController',
                requireLogin: false
            })
            .when('/designers',{
                templateUrl: 'app/views/designerList.tpl.html',
                controller: 'DesignerListController',
                requireLogin: false
            })
            .when('/architects',{
                templateUrl: 'app/views/architectList.tpl.html',
                controller: 'ArchitectListController',
                requireLogin: false
            }) 
            .when('/invests',{
                templateUrl: 'app/views/investList.tpl.html',
                controller: 'InvestListController',
                requireLogin: false
            })                       
            // ---------------------------------------
            .when('/posts/:page', {
                templateUrl: 'app/views/postList.tpl.html',
                controller: 'PostListController',
                requireLogin: false
            })
            .when('/posts/:postType', {
                templateUrl: 'app/views/postList.tpl.html',
                controller: 'PostListController',
                requireLogin: false
            })

            .when('/find', {
                templateUrl: 'app/views/searchInventory.tpl.html',
                controller: 'SearchInventoryController',
                requireLogin: false
            })
            .when('/provider/:providerId', {
                templateUrl: 'app/views/provider.tpl.html',
                controller: 'ShowProviderController',
                requireLogin: false
            })
            .when('/inventory/:inventoryId', {
                templateUrl: 'app/views/inventory.tpl.html',
                controller: 'ShowInventoryController',
                requireLogin: false
            })
            .when('/about', {
                templateUrl: 'app/views/about.tpl.html',
                controller: 'AboutController',
                requireLogin: false
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
