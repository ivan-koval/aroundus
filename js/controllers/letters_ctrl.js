'use strict';

angular.module('myApp.letters', [/*special components here*/])

  .config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/letters', {
      templateUrl: 'views/letters.html',
      controller: 'LettersCtrl'
    });
  }])

  .controller('LettersCtrl', ['$rootScope', '$location', '$scope', 'AroundUsService', function ($rootScope, $location, $scope, AroundUsService) {

    console.log('we are in letters controller');

    $scope.openLettersForYears = function(years){
      $location.path('/letters/'+years);
    }

  }]);