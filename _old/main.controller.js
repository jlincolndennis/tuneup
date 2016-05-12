
angular.module('redditClone')
  .controller('MainController', ['$scope', 'postsService', function($scope, postsService){
    $scope.vm = {};

    $scope.activePost= {};
    $scope.comment = {};
    
    // user get data function from service
    $scope.data = postsService.posts;

}])
