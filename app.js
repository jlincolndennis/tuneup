
angular.module('redditClone').controller('MainController', function($scope, postsService){
  $scope.vm = {};
  $scope.form ={};
  $scope.activePost= {};
  $scope.comment = {};
  $scope.data = postsService.posts;

})
