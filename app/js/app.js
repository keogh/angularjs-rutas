angular.module('ContactsApp', ['ngRoute'])
  .config(function ($routeProvider, $locationProvider) {
    $locationProvider.html5Mode(true);

    $routeProvider
      .when('/', {
        templateUrl: '/views/contacts.html',
        controller: 'ContactsCtrl'
      })
      .when('/contact/:id', {
        templateUrl: '/views/show.html',
        controller: 'ShowCtrl'
      })
      .otherwise({
        redirectTo: '/'
      })
  });