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
    var _errors = [];

    return {
      createUser: createUser,
      logIn: logIn,
      logOut: logOut,
      getErrors: getErrors
    }

    function createUser (user){
      _errors.length = 0;
      return $http.post('/api/v1/users/signup', user)
      .then(function (res){
        if(res.status !== 200) {
          _errors.push(res.data.errors[0])
        }
        if (res.data.token !== undefined) {
          console.log('IN THE FRONT BITCHES');
          $window.localStorage.setItem('token', res.data.token)
          $state.go('posts', {}, {reload:true});
        }
      })
    }

    function logIn(user) {
      _errors.length = 0;
      return $http.post('/api/v1/users/login', user)
        .then (function(res){

          if(res.status !== 200) {
            _errors.push(res.data.errors[0])
          }
          if (res.data.token !== undefined) {
            console.log('IN THE FRONT BITCHES');
            $window.localStorage.setItem('token', res.data.token)
            $state.go('posts', {}, {reload:true});
          }
        })
        .catch(function(err){
          console.log('hello error',err);
        })
    }

    function logOut (){
      console.log('log out in service');
      $window.localStorage.clear();
    }

    function getErrors() {
      return _errors

    }
  }

}());
