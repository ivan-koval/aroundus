'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
    'ngRoute',
    'ui.bootstrap',
    'myApp.aroundUsServices',
    'myApp.lettersByYear',
    'myApp.letters',
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
            //.when('/letters', {
            //    templateUrl: 'views/letters.html'
            //})
            .when('/give_gift', {
                templateUrl: 'views/give_gift.html'
            })
            .when('/1996_97', {
                templateUrl: 'views/Leters/1996_97.html'
    })
            .when('/1998', {
                templateUrl: 'views/Leters/1998.html'
            })
            .when('/1999', {
                templateUrl: 'views/Leters/1999.html'
            })
            .when('/2000_01', {
                templateUrl: 'views/Leters/2000_01.html'
            })
            .when('/2002', {
                templateUrl: 'views/Leters/2002.html'
            })
            .when('/2003', {
                templateUrl: 'views/Leters/2003.html'
            })
            .when('/2004', {
                templateUrl: 'views/Leters/2004.html'
            })
            .when('/2005', {
                templateUrl: 'views/Leters/2005.html'
            })
            .when('/Albania', {
                templateUrl: 'views/Around_world/Albania.html'
            })
            .when('/Austria', {
                templateUrl: 'views/Around_world/Austria.html'
            })
            .when('/Czech', {
                templateUrl: 'views/Around_world/Czech.html'
            })
            .when('/French', {
                templateUrl: 'views/Around_world/French.html'
            })
            .when('/Germany', {
                templateUrl: 'views/Around_world/Germany.html'
            })
            .when('/Holland', {
                templateUrl: 'views/Around_world/Holland.html'
            })
            .when('/Italy', {
                templateUrl: 'views/Around_world/Italy.html'
            })
            .when('/Netherlands', {
                templateUrl: 'views/Around_world/Netherlands.html'
            })
            .when('/Poland', {
                templateUrl: 'views/Around_world/Poland.html'
            })
            .when('/Ukraine', {
                templateUrl: 'views/Around_world/Ukraine.html'
            })
            .when('/List_letters', {
                templateUrl: 'views/List_letters.html'
            })
            .when('/Take_letter', {
                templateUrl: 'views/Take_letter.html'
            })
            .when('/Take_letter_adm', {
                templateUrl: 'views/Take_letter_adm.html'
            })
            .otherwise({redirectTo: '/'}
        );
    }]);
