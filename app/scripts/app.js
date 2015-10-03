'use strict';

/**
 * @ngdoc overview
 * @name codeChatAngularApp
 * @description
 * # codeChatAngularApp
 *
 * Main module of the application.
 */
angular
 .module('codeChatAngularApp', [
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'formly', 
    'formlyBootstrap',
    'lbServices',    
    'angularMoment'

  ])
  .config(function(LoopBackResourceProvider,$httpProvider) {
 
   LoopBackResourceProvider.setUrlBase('http://localhost:3000/api');

    // Inside app config block
    $httpProvider.interceptors.push(function($q, $location, LoopBackAuth) {
      return {
        responseError: function(rejection) {
          if (rejection.status === 401) {
            //Now clearing the loopback values from client browser for safe logout...
            LoopBackAuth.clearUser();
            LoopBackAuth.clearStorage();
            $location.nextAfterLogin = $location.path();
            $location.path('/login');
          }
          return $q.reject(rejection);
        }
      };
    });
 
  })
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/signup', {
        templateUrl: 'views/signup.html',
        controller: 'AuthCtrl',
        controllerAs: 'auth'
      })
      .when('/login', {
        templateUrl: 'views/login.html',
        controller: 'AuthCtrl',
        controllerAs: 'auth'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
