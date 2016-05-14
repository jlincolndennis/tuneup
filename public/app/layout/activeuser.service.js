(function() {
  'use strict';

  angular.module('app')
    .factory('activeUserService', activeUserFactory);

    activeUserFactory.$inject = ['$log', '$q'];

    function activeUserFactory ($log, $q) {
      var _user = {};

      return {
        setActiveUser: setActiveUser,
        getActiveUser: getActiveUser
      }

     function setActiveUser (user){
       console.log('3 in setActiveUser', user);
       return  _user = user;

     }

     function getActiveUser (){
       return $q(function (resolve, reject) {
           console.log('in activeUserService resolve' ,_user)
           resolve( _user)

       })
     }

  }

}());
