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
  })
  .otherwise({redirectTo: '/'});
}]);
