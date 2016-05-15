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

       return  _user = user;

     }

     function getActiveUser (){
       return $q(function (resolve, reject) {
           
           resolve( _user)

       })
     }

  }

}());
