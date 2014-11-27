'use strict';

angular.module('myApp.login', [/*special components here*/])

  //.config(['$routeProvider', function($routeProvider) {
  //  $routeProvider.when('/letters', {
  //    templateUrl: 'views/letters.html',
  //    controller: 'LettersCtrl'
  //  });
  //}])

  .controller('LoginCtrl', ['$rootScope', '$location', '$modalInstance', '$scope', 'AroundUsService', function ($rootScope, $location, $modalInstance, $scope, AroundUsService) {

    console.log('we are in main controller');

    $scope.login = function(){
      $scope.in_progress = true;
      AroundUsService.login($scope.email, $scope.password, function(data){
        $scope.in_progress = false;
        $modalInstance.close();

      }, function(error){
        $scope.in_progress = false;
        alert(error.message);
      });
    };

    $scope.facebookLogin = function(){
      $scope.facebook_in_progress = true;
      FB.login(function(response) {
        if (response.authResponse) {
          console.log('Welcome!  Fetching your information.... ');
          console.log(response.authResponse);
          var access_token = response.authResponse.accessToken;
          FB.api('/me', function(response) {
            AroundUsService.facebookLogin({
              'id': response.id,
              'first_name': response.first_name,
              'last_name': response.last_name,
              'access_token': access_token,
              'email': response.email
            }, function(){
              $scope.facebook_in_progress = false;
              $modalInstance.close('closed');
            }, function(data){
              $scope.facebook_in_progress = false;
              alert(data.message);
            });
            console.log('Good to see you', response);
          });
        } else {
          $scope.facebook_in_progress = false;
          console.log('User cancelled login or did not fully authorize.');
        }
      }, {scope: 'email,public_profile'});
    };

    $scope.cancel = function(){
      $modalInstance.close();
    }

  }]);