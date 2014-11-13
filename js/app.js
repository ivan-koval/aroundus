'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
    'ngRoute'
    //'myApp.view1',
    //'myApp.view2',
    //'myApp.version'
]).
    config(['$routeProvider', function ($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'views/homepage.html'
            })
            .when('/nicola', {
                templateUrl: 'views/nicola.html'
            })
            .when('/nicola_around', {
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
            .when('/1996_97', {
                templateUrl: 'views/1996_97.html'
    })
            .when('/1998', {
                templateUrl: 'views/1998.html'
            })
            .when('/1999', {
                templateUrl: 'views/1999.html'
            })
            .when('/2000_01', {
                templateUrl: 'views/2000_01.html'
            })
            .when('/2002', {
                templateUrl: 'views/2002.html'
            })
            .when('/2003', {
                templateUrl: 'views/2003.html'
            })
            .when('/2004', {
                templateUrl: 'views/2004.html'
            })
            .when('/2005', {
                templateUrl: 'views/2005.html'
            })
            .otherwise({redirectTo: '/'}
        );
    }]);
