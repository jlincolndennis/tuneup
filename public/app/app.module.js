(function() {
  'use strict';

  var dependencies = [
    'ui.router',
    'ngAnimate',
    'ngMessages',
    'app.posts',
  ];

  angular.module('app', dependencies)
    .config(setupRoutes)

    .run(function ($rootScope, $state, $window, $location) {
      $rootScope.$on('$stateChangeStart', function (event, toState, toParams, fromState, fromParams, options) {

        if(toState.publicOnly && localStorage.getItem('token')) {
          event.preventDefault();
          $state.go('posts')
        }
      });
    })

    .factory('authInterceptor', function ($location) {
      return {
        request: function (config) {
          var token = localStorage.getItem('token')

          if (token) {
            config.headers.Authorization = 'Bearer ' + localStorage.getItem('token');
            return config
          } else {

            return config
          }
        },
        responseError: function (response) {
          if (response.status === 403){
            localStorage.removeItem('token');
          $location.path('/')
          }
          return response

        }
      }
    })

    setupRoutes.$inject = ['$stateProvider',
                          '$urlRouterProvider',
                          '$locationProvider',
                          '$httpProvider'];

    function setupRoutes($stateProvider, $urlRouterProvider, $locationProvider, $httpProvider){
      $httpProvider.interceptors.push('authInterceptor');
      $locationProvider.html5Mode(true);
      $urlRouterProvider.otherwise("/");

      $stateProvider
        .state('app', {
          abstract: true,
          template: "<faux-reddit></faux-reddit>",
        })
        .state('posts',{
          template: "<fr-posts></fr-posts>",
          parent: 'app',
          url: "/",
          resolve: {
            currentUserResolve: currentUserResolve
          },
        })
        .state('login',{
          template: "<fr-account></fr-account>",
          parent: 'app',
          url: "/login",
          publicOnly: true,
          // restricted: true,
          resolve: {
            currentUserResolve: currentUserResolve
            }
        })
        .state('signup',{
          template: "<fr-account></fr-account>",
          parent: 'app',
          url: "/signup",
          publicOnly: true,
          resolve: {
            currentUserResolve: currentUserResolve
            }
        })

    }

    function currentUserResolve ($http, activeUserService) {

        return $http.get('/api/v1/users/me')
          .then(function (response) {
            return activeUserService.setActiveUser(response.data)
          })
          .catch(function () {
            localStorage.clear();
            return activeUserService.setActiveUser(null)
        })
      }


})();
