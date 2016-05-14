(function() {
  'use strict';

  angular.module('app')
    .directive('fauxReddit', appDirective);

      function appDirective() {
        return {
          restrict: 'E',
          scope: {
            current: '='
          },
          templateUrl: '/app/layout/layout.directive.html',
          controller: appController,
          controllerAs: "vm"
        }
      }

      appController.$inject = ['$log']

      function appController($log) {
        var vm = this;
    }

}());
