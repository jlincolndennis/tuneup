(function() {
  'use strict';

  angular.module('app.posts')
    .directive('posts', postsDirective);

      function postsDirective() {
        return {
          restrict: "E",
          scope: {},
          templateUrl: "app/posts/posts.directive.html",
          controller: postsController,
          controllerAs: "vm"
        }
      }

      postsController.$inject = ['$log']

      function postsController($log) {
        var vm = this;
        vm.logPost = logPost;

        function logPost() {
          $log.info('POST##########')
        }
      }
}());
