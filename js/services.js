var aroundUsServices = angular.module('myApp.aroundUsServices', []);
var endpoint = 'http://aroundus-api.vakoms.com';
//var endpoint = 'http://localhost:8080';
//var endpoint = 'http://91.237.240.22:8080';

aroundUsServices.factory('AroundUsService', function($http, $rootScope) {
  function getLetters(years, success, error) {
    $http.post(endpoint + '/letters', {"years": years}).success(success).error(error);
  }
  function suggestHelp(data, success, error) {
    $http.post(endpoint + '/suggest_help', data).success(success).error(error);
  }
  function addLetter(data, success, error) {
    $http.post(endpoint + '/add_letter', data).success(success).error(error);
  }
  function deleteLetter(id, success, error) {
    $http.get(endpoint + '/delete_letter/'+id).success(success).error(error);
  }
  function getPending(success, error) {
    $http.get(endpoint + '/pending').success(success).error(error);
  }
  function getDetails(id, success, error) {
    $http.get(endpoint + '/details/'+id).success(success).error(error);
  }
  function register(user, success, error) {
    $http.post(endpoint + '/register', user).success(success).error(error);
  }
  function facebookRegister(user, success, error) {
    $http.post(endpoint + '/fb_register', user).success(success).error(error);
  }
  function facebookLogin(user, success, error) {
    $http.post(endpoint + '/fb_login', user).success(function(data){
      $rootScope.user = data.user;
      success(data);
    }).error(error);
  }
  function logout(success, error){
    $http.get(endpoint + '/logout').success(function(data){
      delete $rootScope.user;
      success(data);
    }).error(error);
  }
  function checkLoginStatus(){
    $http.get(endpoint + '/login').success(function(data){
      $rootScope.user = data.user;
    }).error(function(){
      if($rootScope.user){
        delete $rootScope.user;
      }
    });
  }
  function login(email, password, success, error){
    $http.post(endpoint + '/login', {
      "email": email,
      "password": password
    }).success(function(data){
      $rootScope.user = data.user;
      success(data);
    }).error(error);
  }

  return {
    register: register,
    facebookRegister: facebookRegister,
    facebookLogin: facebookLogin,
    getLetters: getLetters,
    login: login,
    logout: logout,
    checkLoginStatus: checkLoginStatus,
    getPending: getPending,
    getDetails: getDetails,
    suggestHelp: suggestHelp,
    addLetter: addLetter,
    deleteLetter: deleteLetter
  }
});