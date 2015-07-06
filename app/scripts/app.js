'use strict';

/**
 * @ngdoc overview
 * @name demoSortableApp
 * @description
 * # demoSortableApp
 *
 * Main module of the application.
 */
angular
  .module('demoSortableApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ui.sortable'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/sort', {
        templateUrl: 'views/sort.html',
        controller: 'SortCtrl',
        controllerAs: 'sort'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
