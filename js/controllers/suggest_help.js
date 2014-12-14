'use strict';

angular.module('myApp.suggest_help', [/*special components here*/])

  .config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/gift/:id', {
      templateUrl: 'views/give_gift.html',
      controller: 'SuggestHelpCtrl'
    });
  }])

  .controller('SuggestHelpCtrl', ['$rootScope', '$scope', '$modal', '$routeParams', 'AroundUsService', function ($rootScope, $scope, $modal, $routeParams, AroundUsService) {
    console.log('suggest ctrl');

    //$scope.years = $routeParams.years;
    console.log($routeParams.id);
    AroundUsService.getDetails($routeParams.id, function(data){
      console.log(data);
      $scope.letter = data;
    }, function(){
      console.log('some error happened!');
    });


    $scope.help = function(){

      if($rootScope.user){
        $scope.loading = true;
        AroundUsService.suggestHelp({
          'message': $scope.message,
          'id': $routeParams.id
        },
        function(){
          $scope.loading = false;
          alert('Дуже дякуємо за допомогу, ми з вами зв’яжемось');
        },function(){
          $scope.loading = false;
          console.log('some error happened!');
        });
      } else {
        alert('Будь ласка, увійдіть на сайт або зареєструйтесь.');
      }
    };



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