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

      navController.$inject = ['$log', 'postsService', 'accountService', 'activeUserService']

      function navController($log, postsService, accountService, activeUserService) {
        var vm = this;
        vm.post = {};
        vm.postFormSubmit = postFormSubmit;
        vm.postFormClose = postFormClose;
        vm.changeSortCriteria = changeSortCriteria;
        vm.search = postsService.search;
        vm.logOut = logOut;
        vm.activeUser = activeUserService.getActiveUser();

        function postFormSubmit(form) {
          var newPost = angular.copy(vm.post);
          formReset(form);
          postsService.submitPost(newPost)
            .then(function(res){
              return res
            });
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

        function logOut(){
          accountService.logOut();
        }

        function formReset(form) {
          form.$setPristine();
          form.$setUntouched();
          vm.post = {}
          return
        }

    }
}());
