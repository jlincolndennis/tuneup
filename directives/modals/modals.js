angular.module('redditClone').directive('modals', function (postsService){
  return {
    restrict: 'E',
    templateUrl: '/directives/modals/modals.html',
    link: function (scope, element, attr, fn) {
      scope.formSubmit = function () {
        var newPost = angular.copy(scope.form);
        scope.form = {};
        scope.myForm.$setPristine();
        scope.myForm.$setUntouched();
        postsService.addPost(newPost);
      }
      scope.formClose = function () {
        scope.form = {};
        scope.myForm.$setUntouched();
        scope.myForm.$setPristine();
      }

      scope.makeAComment = function(post) {
        scope.activePost = post;
      }
      scope.commentFormSubmit = function () {
        scope.activePost.comments.push(scope.comment);
        scope.comment = {};
        scope.commentForm.$setUntouched();
      }

      $scope.commentFormClose = function () {
        $scope.comment = {};
        $scope.commentForm.$setUntouched();
      }




    }
  }
})
