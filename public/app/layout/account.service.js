(function() {
  'use strict';

  angular.module('app')
  .factory('accountService', accountFactory);

  accountFactory.$inject = [
    '$log',
     '$http',
     '$state',
     '$window'
  ];

  function accountFactory ($log, $http, $state, $window) {
    return {
      createUser: createUser,
      logIn: logIn,
      logOut: logOut
    }

    function createUser (user){
      console.log('in user service', user);
      return $http.post('/api/v1/users/signup', user)
      .then(function (res){
        $window.localStorage.setItem('token', res.data.token)
        $state.go('posts');
      })
    }

    function logIn(user) {
      return $http.post('/api/v1/users/login', user)
        .then (function(res){
          $window.localStorage.setItem('token', res.data.token)
          $state.go('posts');
        })

    }
    function logOut (){
      console.log('log out in service');
      // $state.go('login');
      $window.localStorage.clear();
    }
  }

}());
