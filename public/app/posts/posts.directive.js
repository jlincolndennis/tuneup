(function() {
  'use strict';

  angular.module('app.posts')
    .directive('frPosts', postsDirective);

      function postsDirective() {
        return {
          restrict: "E",
          scope: {},
          templateUrl: "app/posts/posts.directive.html",
          controller: postsController,
          controllerAs: "vm"
        }
      }

      postsController.$inject = ['$log', 'postsService']

      function postsController($log, postsService) {
        var vm = this;
        vm.upVote = voteUp;
        vm.downVote = voteDown;
        vm.showComments = showComments;
        vm.commentFormSubmit = commentFormSubmit;
        vm.passActivePost = passActivePost;
        vm.commentFormClose = commentFormClose;
        vm.search = postsService.search;
        vm.sort = postsService.sort;

        postsService.getPosts().then(function (posts) {
          return vm.posts = posts;
        });

        function voteUp(post) {
          console.log('in post dir', vm.sort);
          post.votes++;
        }

        function voteDown(post) {
          post.votes--;
        }

        function showComments(post) {
          post.commentShow = !post.commentShow
        }

        function commentFormSubmit(form) {
          var newComment = angular.copy(vm.comment);
          postsService.submitComment(newComment);
          vm.comment = null;
          //will not work until ngMessages is set up!
          form.$setPristine();
          form.$setUntouched();
        }

        function passActivePost(post) {
          postsService.setActivePost(post);
        }

        function commentFormClose(form) {
          vm.comment = null;
          form.$setPristine();
          form.$setUntouched();
        }

      }
}());
