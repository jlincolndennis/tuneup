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
          // resolve: {
          //   currentUserResolve: currentUserResolve
          // },
        })
        .state('posts',{
          template: "<fr-posts current='current'></fr-posts>",
          parent: 'app',
          url: "/",
          resolve: {
            currentUserResolve: currentUserResolve
          },
          // controller: function($scope, currentUserResolve){
          //   $scope.current = currentUserResolve;
          //   console.log('in extra controller', currentUserResolve);
          // },

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
      console.log('1 in the resolve function');
      if (localStorage.getItem('token')) {
        const config = {
          headers: {
            'Authorization': 'Bearer ' + localStorage.getItem('token')
          }
        }
        return $http.get('/api/v1/users/me', config)
          .then(function (response) {
            console.log('2 in the resolve then', response.data);
            return activeUserService.setActiveUser(response.data)
          })
          .catch(function () {
            console.log('in the resolve catch', response.data);
            return activeUserService.setActiveUser(null)
            localStorage.clear();
            return null;
          })
        } else {
          console.log('in resolve else');
          return activeUserService.setActiveUser(null)
        }
      }


})();
