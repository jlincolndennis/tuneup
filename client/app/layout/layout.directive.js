(function() {
  'use strict';

  angular.module('app')
    .directive('fauxReddit', appDirective);

    function appDirective() {
      return {
        restrict: 'E',
        templateUrl: '/app/layout/layout.directive.html',
        controller: function () {
        }
      }
    }
}());
