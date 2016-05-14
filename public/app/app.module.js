(function() {
  'use strict';

  var dependencies = [
    'ui.router',
    'ngAnimate',
    'ngMessages',
    'app.posts',
  ];

  angular.module('app', dependencies)
    .config(setupRoutes);

    setupRoutes.$inject = ['$stateProvider',
                          '$urlRouterProvider',
                          '$locationProvider', ];

    function setupRoutes($stateProvider, $urlRouterProvider, $locationProvider){
      $locationProvider.html5Mode(true);
      $urlRouterProvider.otherwise("/");

      $stateProvider
        .state('app', {
          abstract: true,
          template: "<faux-reddit></faux-reddit>",
        })
        .state('posts',{
          template: "<fr-posts current='current'></fr-posts>",
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
          resolve: {
            currentUserResolve: currentUserResolve
            }
        })
        .state('signup',{
          template: "<fr-account></fr-account>",
          parent: 'app',
          url: "/signup",
          resolve: {
            currentUserResolve: currentUserResolve
            }
        })

    }
    function currentUserResolve ($http, activeUserService) {
      if (localStorage.getItem('token')) {
        const config = {
          headers: {
            'Authorization': 'Bearer ' + localStorage.getItem('token')
          }
        }
        return $http.get('/api/v1/users/me', config)
          .then(function (response) {
            return activeUserService.setActiveUser(response.data)
          })
          .catch(function () {
            localStorage.clear();
            return activeUserService.setActiveUser(null)
          })
        } else {
          return activeUserService.setActiveUser(null)
        }
      }


})();
