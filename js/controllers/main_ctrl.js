'use strict';

angular.module('myApp.main', [/*special components here*/])

  //.config(['$routeProvider', function($routeProvider) {
  //  $routeProvider.when('/letters', {
  //    templateUrl: 'views/letters.html',
  //    controller: 'LettersCtrl'
  //  });
  //}])

  .controller('MainCtrl', ['$rootScope', '$location', '$modal', '$scope', 'AroundUsService', function ($rootScope, $location, $modal, $scope, AroundUsService) {

    console.log('we are in main controller');

    $scope.login = function(){
      $modal.open({
        templateUrl: 'views/modals/login.html',
        controller: 'LoginCtrl',
        size: 'sm'
      });
    };

    $scope.logout = function () {
      AroundUsService.logout(function(){

      }, function(){

      })
    };

    $scope.signUp = function () {
      $modal.open({
        templateUrl: 'views/modals/sign_up.html',
        controller: 'SignUpCtrl',
        size: 'sm'
      });
    }

  }]);