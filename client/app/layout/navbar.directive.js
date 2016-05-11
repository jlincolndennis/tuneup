(function() {
  'use strict';

  angular.module('app')
    .directive('navBar', navDirective);

    function navDirective() {
      return {
        restrict: 'E',
        templateUrl: '/app/layout/navbar.directive.html',
        controller: function () {
        }
      }
    }
}());
