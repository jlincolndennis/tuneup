(function() {
  'use strict';

  angular.module('app.posts')
    .directive('frPosts', postsDirective);

      function postsDirective() {
        return {
          restrict: "E",
          scope: {
            current: '='
          },
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
        vm.activePostId = '';
        vm.deletePost = deletePost;
        vm.deleteComment = deleteComment;

        postsService.getPosts().then(function (posts) {
          return vm.posts = posts;
        });

        function voteUp(post) {
          postsService.updateVote(post, 'up');
          return
        }

        function voteDown(post) {
          postsService.updateVote(post, 'down');
          return
        }

        function showComments(post) {
          post.commentShow = !post.commentShow
        }

        function commentFormSubmit(form) {
          var newComment = angular.copy(vm.comment);
          newComment.post_id = vm.activePostId;
          // until resolves set up
          newComment.user_id = 3
          postsService.submitComment(newComment);
          vm.comment = null;
          vm.activePostId = null;
          form.$setPristine();
          form.$setUntouched();
        }

        function passActivePost(post) {
          vm.activePostId = post.post_id;
          return
        }

        function commentFormClose(form) {
          vm.comment = null;
          form.$setPristine();
          form.$setUntouched();
        }

        function deletePost(post) {
          postsService.deletePost(post);
          return

        }

        function deleteComment(comment, post) {
          postsService.deleteComment(comment);
          post.show = false;
          return

        }

      }
}());
