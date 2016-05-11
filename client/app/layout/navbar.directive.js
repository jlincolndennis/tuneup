(function() {
  'use strict';

  angular.module('app')
    .directive('frNavBar', navDirective);

      function navDirective() {
        return {
          restrict: 'E',
          scope: {},
          templateUrl: '/app/layout/navbar.directive.html',
          controller: navController,
          controllerAs: "vm"
        }
      }

      navController.$inject = ['$log', 'postsService']

      function navController($log, postsService) {
        var vm = this;
        vm.post = {};
        vm.postFormSubmit = postFormSubmit;
        vm.postFormClose = postFormClose;
        vm.changeSortCriteria = changeSortCriteria;
        vm.search = postsService.search;

        function postFormSubmit(form) {
          $log.log(vm.post)
          var newPost = angular.copy(vm.post);
          postsService.submitPost(newPost);
          formReset(form);
          return
        }

        function postFormClose(form) {
          formReset(form);
          return
        }

        function changeSortCriteria(criteria) {
          postsService.sort.criteria = criteria;
          console.log('after', postsService.sort);
          return

        }

        function formReset(form) {
          form.$setPristine();
          form.$setUntouched();
          vm.post = {}
          return
        }

    }
}());
