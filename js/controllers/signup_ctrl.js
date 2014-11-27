'use strict';

angular.module('myApp.signUp', [/*special components here*/])

  //.config(['$routeProvider', function($routeProvider) {
  //  $routeProvider.when('/letters', {
  //    templateUrl: 'views/letters.html',
  //    controller: 'LettersCtrl'
  //  });
  //}])

  .controller('SignUpCtrl', ['$rootScope', '$location', '$modalInstance', '$scope', 'AroundUsService', function ($rootScope, $location, $modalInstance, $scope, AroundUsService) {

    console.log('we are in main controller');

    $scope.user = {
      //first_name: "Ivan",
      //last_name: "Koval",
      //email: "i@vk.com",
      //phone: "3444444",
      //password: "qwer"
    };

    $scope.facebookSignUp = function() {
      console.log('fb runed');
      $scope.facebook_in_progress = true;
      FB.login(function(response) {
        if (response.authResponse) {
          console.log('Welcome!  Fetching your information.... ');
          console.log(response.authResponse);
          var access_token = response.authResponse.accessToken;
          FB.api('/me', function(response) {
            AroundUsService.facebookRegister({
              'id': response.id,
              'first_name': response.first_name,
              'last_name': response.last_name,
              'access_token': access_token,
              'email': response.email
            }, function(){
              $scope.facebook_in_progress = false;
              $modalInstance.dismiss();
              alert('Thanks, now you can login!');
              //ModalService.verifyEmailAlert('Thanks for joining us!', 'Welcome to Grademeds, <strong>'+response.name+'</strong>.');
            }, function(data){
              $scope.facebook_in_progress = false;
              alert('Some error happened')
            });
            console.log('Good to see you', response);
          });
        } else {
          $scope.facebook_in_progress = false;
          console.log('User cancelled login or did not fully authorize.');
        }
      }, {scope: 'email,public_profile'});
      //$facebook.login().then(function(response) {
      //  console.log(response);
      //});
    };

    $scope.signUp = function () {
      console.log('user sign up');
      $scope.in_progress = true;

      AroundUsService.register($scope.user, function (data) {
          console.log('registered', data);
          $modalInstance.dismiss();
          alert('Thanks, now you can login!');
          //ModalService.verifyEmailAlert('Verify your Email', 'Please click on the link sent to your email id <strong>'+$scope.user.email+'</strong> to verify your email id.');
          //$modalInstance.dismiss();
          $scope.in_progress = false;
        }, function (data) {
          alert(data.message);
          $scope.in_progress = false;
        }
      );
      console.log($scope.user);
    };

    $scope.cancel = function(){
      $modalInstance.close();
    }

  }]);