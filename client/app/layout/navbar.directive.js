(function() {
  'use strict';

  angular.module('app')
    .directive('navBar', navDirective);

      function navDirective() {
        return {
          restrict: 'E',
          scope: {},
          templateUrl: '/app/layout/navbar.directive.html',
          controller: navController,
          controllerAs: "vm"
        }
      }

      navController.$inject = ['$log']

      function navController($log) {
        var vm = this;
        vm.logNav = logNav;

        function logNav() {
          $log.info('NAV>>>>>>>>>')
        }
      }
}());
