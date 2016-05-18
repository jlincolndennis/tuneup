(function() {
  'use strict';

  angular.module('app.posts')
    .directive('tuPosts', postsDirective);

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

      postsController.$inject = ['$log', 'postsService', 'activeUserService']

      function postsController($log, postsService, activeUserService) {
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
        vm.showDelete = showDelete;

        activeUserService.getActiveUser()
          .then(function (user) {
            vm.activeUser = user
            return vm.activeUser
          })

        postsService.getPosts()
          .then(function (posts) {
          return vm.posts = posts;
        });


        function voteUp(post) {
          postsService.updateVote(post, 'up')
            .then(function(res){
              if (res.data) {
                vm.errors = res.data.error[0]
              } else {
                return
              }
          })
        }

        function voteDown(post) {
          postsService.updateVote(post, 'down')
            .then(function(res){
              if (res.data) {
                vm.errors = res.data.error[0]
              } else {
                return
              }
            })
        }

        function showComments(post) {
          post.commentShow = !post.commentShow
        }

        function commentFormSubmit(form) {
          var newComment = angular.copy(vm.comment);
          newComment.post_id = vm.activePostId;
          newComment.user_id = vm.activeUser.user_id
          postsService.submitComment(newComment, vm.activeUser.username);
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

        function showDelete(article) {
          if (!vm.activeUser) return false;
          if (article.user_id === vm.activeUser.user_id) {
            return true
          } else {
            return false
          }
        }

      }
}());
