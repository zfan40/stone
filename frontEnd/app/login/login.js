angular.module('login', [])

    .service('LoginService', [function() {
        this.attemptLogin = function(email, password) {
            // create your request to your resource or $http request
            return true;
        };

        return this;
    }])

    .controller('LoginCtrl', ['$scope', 'LoginService', 'AuthService', '$location', function($scope, LoginService, AuthService, $location) {
        // If user is logged in send them to home page
        if (AuthService.getUserAuthenticated()) {
            $location.path('/pets');
        }

        // attempt login to your api
        $scope.attemptLogin = function() {
            /**
            LoginService.attemptLogin($scope.credentials.email, $scope.credentials.password).success(function(data) {
                if (data.success) {
                    AuthService.setUserAuthenticated(true);
                    $location.path('/pets');
                } else {
                    AuthService.setUserAuthenticated(false);
                    // you're probably a hacker
                }
            });
             */

            AuthService.setUserAuthenticated(true);
            $location.path('/pets');
        };
    }]);