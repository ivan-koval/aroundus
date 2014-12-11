'use strict';

angular.module('myApp.pending_letters', [/*special components here*/])

  .config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/gift', {
      templateUrl: 'views/gift.html',
      controller: 'PendingLettersCtrl'
    });
  }])

  .controller('PendingLettersCtrl', ['$rootScope', '$scope', '$modal', '$routeParams', 'AroundUsService', function ($rootScope, $scope, $modal, $routeParams, AroundUsService) {
    console.log('pending ctrl');

    //$scope.years = $routeParams.years;

    AroundUsService.getPending(function(data){
      console.log(data);
      $scope.letters = data._items;
    }, function(){
      console.log('some error happened!');
    });

    //$scope.readMore = function(text){
    //  $modal.open({
    //    templateUrl: 'views/modals/letter_read_more.html',
    //    controller: function ($scope, $modalInstance, text) {
    //      $scope.text = text;
    //
    //      $scope.ok = function () {
    //        $modalInstance.close();
    //      }
    //    },
    //    size: 's',
    //    resolve: {
    //      text: function () {
    //        return text;
    //      }
    //    }
    //  });
    //}

  }]);