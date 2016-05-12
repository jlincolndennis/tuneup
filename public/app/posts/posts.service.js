(function() {
  'use strict';

  angular.module('app.posts')
    .factory('postsService', postFactory);

    postFactory.$inject = ['$http', '$log'];

    function postFactory($http, $log) {
      var _activePost = {};
      var _posts = [];

      return {
        getPosts: getPosts,
        setActivePost: setActivePost,
        // submitComment: submitComment,
        submitPost: submitPost,
        search: {query: ""},
        sort: {criteria: '-date'}
      }

      function getPosts() {
        return $http.get('/api/v1/posts')
          .then(function(res){
            _posts = res.data;
            return _posts;
          });
      }

      function setActivePost(post) {
        _activePost = post;
        return
      }

      function submitComment(comment) {
        _activePost.comments.push(comment);
        _activePost = {}
        return
      }

      function submitPost(post) {
        post.votes = 0;
        post.user_id = 1
        return $http.post('/api/v1/posts/add', post)
          .then(function(newPost){
            _posts.push(newPost.data);
            return _posts;
          })
      }
    }
}());
