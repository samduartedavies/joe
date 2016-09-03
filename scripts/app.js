'use strict';

/**
 * @ngdoc overview
 * @name andreaApp
 * @description
 * # andreaApp
 *
 * Main module of the application.
 */
angular
  .module('andreaApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        controller: 'MainCtrl',
      })	  
      .otherwise({
        redirectTo: '/'
      });
  });
