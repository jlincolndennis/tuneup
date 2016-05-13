(function() {
  'use strict';

    angular.module('app')
      .directive('frAccount', accountDirective);

      function accountDirective (){
        return {
          restrict: "E",
          scope: {},
          templateUrl: "app/layout/account.directive.html",
          controller: accountController,
          controllerAs: "vm"
        }
      }

      accountController.$inject = ['$log']

      function accountController($log) {
        var vm = this;
      }
}());
