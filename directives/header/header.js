angular.module('redditClone').directive('headerNav', function (){
  return {
    restrict: 'E',
    templateUrl: '/directives/header/header.html',
    link: function (scope, element, attr, fn) {
      scope.changeSorting = function (sortCriteria) {
        scope.vm.sort = sortCriteria
      }
    }
  }

})
