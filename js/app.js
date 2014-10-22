'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngRoute'
  //'myApp.view1',
  //'myApp.view2',
  //'myApp.version'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider
  .when('/', {
      templateUrl: 'views/homepage.html'
  })
  .when('/nicola', {
      templateUrl: 'views/nicola.html'
  }).when('/nicola_around', {
      templateUrl: 'views/nicola_around.html'
  })
  .when('/gift', {
      templateUrl: 'views/gift.html'
  })
  .when('/action', {
      templateUrl: 'views/action.html'
  })
  .when('/letters', {
      templateUrl: 'views/letters.html'
  })
      .when('/give_gift', {
     templateUrl: 'views/give_gift.html'
      })

  .otherwise({redirectTo: '/'});
}]);
