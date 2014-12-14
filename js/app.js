'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
    'ngRoute',
    'ui.bootstrap',
    'myApp.aroundUsServices',
    'myApp.lettersByYear',
    'myApp.main',
    'myApp.login',
    'myApp.signUp',
    'myApp.letters',
    'myApp.pending_letters',
    'myApp.suggest_help',
    'myApp.add_letter'
    //'myApp.view1',
    //'myApp.view2',
    //'myApp.version'
]).
    config(['$routeProvider', '$httpProvider', function ($routeProvider, $httpProvider) {

        $httpProvider.interceptors.push(function($q, $rootScope) {
          return {
            'responseError': function(rejection) {
              if (rejection.status == 401) {
                delete $rootScope.user;
                console.log('we need to open login popup');
              }
              return $q.reject(rejection);
            }
          };
        });
        $httpProvider.defaults.withCredentials = true;

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
            //.when('/gift', {
            //    templateUrl: 'views/gift.html'
            //})
            .when('/action', {
                templateUrl: 'views/action.html'
            })
            //.when('/letters', {
            //    templateUrl: 'views/letters.html'
            //})
            //.when('/give_gift', {
            //    templateUrl: 'views/give_gift.html'
            //})
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
    }])
  .run(['$rootScope', 'AroundUsService', function ($rootScope, AroundUsService) {
    AroundUsService.checkLoginStatus();

    window.fbAsyncInit = function() {
      FB.init({
        appId      : '735642403192009',
        xfbml      : true,
        version    : 'v2.1'
      });
    };

    (function(d, s, id){
      var js, fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) return;
      js = d.createElement(s); js.id = id;
      js.src = "//connect.facebook.net/es_LA/sdk.js";
      fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'));

    //    $scope.$on('modal-shown', function() {});

    //    $rootScope.$on('ngDialog.opened', function (e, $dialog) {
    //      // move doctor-profile dialog left on 540px
    //      if ($dialog[0].className.indexOf('ngdialog-doctorprofile') > -1) {
    //        var connector = document.getElementsByClassName('connector')[0];
    //        var dialog = document.getElementsByClassName('gm-modal-body')[0];
    //        dialog.style.left = (connector.getBoundingClientRect().left - 540) + 'px';
    //      }
    //    });
  }]);
