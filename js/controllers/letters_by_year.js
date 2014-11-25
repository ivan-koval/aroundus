'use strict';

angular.module('myApp.lettersByYear', [/*special components here*/])

  .config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/letters/:years', {
      templateUrl: 'views/letters_by_year.html',
      controller: 'LettersByYearCtrl'
    });
  }])

  .controller('LettersByYearCtrl', ['$rootScope', '$scope', '$modal', '$routeParams', 'AroundUsService', function ($rootScope, $scope, $modal, $routeParams, AroundUsService) {
    console.log('by year ctrl', $routeParams.years);

    $scope.years = $routeParams.years;

    AroundUsService.getLetters($scope.years.split('-'), function(data){
      console.log(data);
      $scope.letters = data._items;
    }, function(){
      console.log('some error happened!');
    });

    $scope.readMore = function(text){
      $modal.open({
        templateUrl: 'views/modals/letter_read_more.html',
        controller: function ($scope, $modalInstance, text) {
          $scope.text = text;

          $scope.ok = function () {
            $modalInstance.close();
          }
        },
        size: 's',
        resolve: {
          text: function () {
            return text;
          }
        }
      });
    }

  }]);