(function() {
  'use strict';

  var dependencies = [
    'ui.router',
    'ngAnimate',
    'ngMessages',
    'app.posts'
  ];

  angular.module('app', dependencies)
    .config(setupRoutes);

    setupRoutes.$inject = ['$stateProvider',
                          '$urlRouterProvider',
                          '$locationProvider'];

    function setupRoutes($stateProvider, $urlRouterProvider, $locationProvider){
      $locationProvider.html5Mode(true);
      $urlRouterProvider.otherwise("/");

      $stateProvider
        .state('app', {
          abstract: true,
          template: "<faux-reddit></faux-reddit>"
        })
        .state('app.posts',{
          template: "<fr-posts></fr-posts>",
          url: "/"
        })
        .state('app.account',{
          template: "<fr-account></fr-account>",
          url: "/login"
        })
    }
})();
