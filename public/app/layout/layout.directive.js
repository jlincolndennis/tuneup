(function() {
  'use strict';

  angular.module('app')
    .directive('fauxReddit', appDirective);

      function appDirective() {
        return {
          restrict: 'E',
          scope: {},
          templateUrl: '/app/layout/layout.directive.html',
          controller: appController,
          controllerAs: "vm"
        }
      }

      appController.$inject = ['$log']

      function appController($log) {
        var vm = this;
        vm.logLayout = logLayout;

        function logLayout() {
          $log.info('LAYOUT~~~~~~~~~')
        }
      }
}());
