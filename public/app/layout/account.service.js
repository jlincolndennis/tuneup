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
    var _logInErrors = [];
    var _signUpErrors = [];

    return {
      createUser: createUser,
      logIn: logIn,
      logOut: logOut,
      getSignUpErrors: getSignUpErrors,
      getLogInErrors: getLogInErrors
    }

    function createUser (user){
      _signUpErrors.length = 0;
      return $http.post('/api/v1/users/signup', user)
      .then(function (res){
        if(res.status !== 200) {
          _signUpErrors.push(res.data.errors[0])
        }
        if (res.data.token !== undefined) {
          $window.localStorage.setItem('token', res.data.token)
          $state.go('posts', {}, {reload:true});
        }
      })
    }

    function logIn(user) {
      _logInErrors.length = 0;
      return $http.post('/api/v1/users/login', user)
        .then (function(res){

          if(res.status !== 200) {
            _logInErrors.push(res.data.errors[0])

          }
          if (res.data.token !== undefined) {
            $window.localStorage.setItem('token', res.data.token)
            $state.go('posts', {}, {reload:true});
          }
        })
        .catch(function(err){
          console.log('hello error',err);
        })
    }

    function logOut (){
      $window.localStorage.clear();
    }

    function getLogInErrors() {
      return _logInErrors
    }

    function getSignUpErrors() {
      return _signUpErrors
    }
  }

}());
