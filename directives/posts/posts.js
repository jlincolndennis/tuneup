angular.module('redditClone').directive('posts', function (){
  return {
    restrict: 'E',
    templateUrl: '/directives/posts/posts.html',
    link: function (scope, element, attr) {

        scope.upVote = function (post) {
          post.votes++;
        }

        scope.downVote = function (post) {
          post.votes--;
        }

        scope.revealComments = function (post) {
          post.showComments = !post.showComments
        }

        scope.makeAComment = function(post) {
          console.log("passed in post", post);
          scope.activePost = post;
        }
    }
  }
})
