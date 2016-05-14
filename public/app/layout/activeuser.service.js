(function() {
  'use strict';

  angular.module('app')
    .factory('activeUserService', activeUserFactory);

    activeUserFactory.$inject = ['$log'];

    function activeUserFactory ($log) {
      var _user = {};

      return {
        setActiveUser: setActiveUser,
        getActiveUser: getActiveUser
      }

     function setActiveUser (user){
       _user = user;
       return
     }

     function getActiveUser (){
       return _user;
     }

  }

}());
