'use strict';

angular.module('myApp.add_letter', [/*special components here*/])

  .config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/add_letter', {
      templateUrl: 'views/add_letter.html',
      controller: 'AddLetterCtrl'
    });
  }])

  .controller('AddLetterCtrl', ['$rootScope', '$location', '$scope', '$modal', '$routeParams', 'AroundUsService', function ($rootScope, $location, $scope, $modal, $routeParams, AroundUsService) {
    console.log('add letter ctrl');
    $scope.letter = {
      year: 2014
    };
    $scope.add = function(){
      console.log($scope.letter, $scope.letter.keywords.split(' '));
      AroundUsService.addLetter($scope.letter, function(data){
        console.log(data);
        //$scope.letters = data._items;
        alert('Дякуємо, ваш лист було добавлено!')
        $location.path('/gift');
      }, function(){
        console.log('some error happened!');
      });
    };
    //$scope.years = $routeParams.years;



  }]);