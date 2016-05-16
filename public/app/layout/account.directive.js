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

      accountController.$inject = ['$log', 'accountService']

      function accountController($log, accountService) {
        var vm = this;
        vm.signUpSubmit = signUpSubmit;
        vm.logInSubmit = logInSubmit;
        vm.signUpErrors = accountService.getSignUpErrors();
        vm.logInErrors = accountService.getLogInErrors();

        function signUpSubmit(form) {
          var newUser = angular.copy(vm.newUser);
          vm.newUser = {}
          form.$setUntouched();
          return accountService.createUser(newUser)
        }

        function logInSubmit(form) {
          var user = angular.copy(vm.user);
          vm.user = {}
          form.$setUntouched();
          return accountService.logIn(user)
        }
      }

}());
