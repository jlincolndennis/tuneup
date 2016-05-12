(function() {
  'use strict';

  angular.module('app.posts')
    .factory('postsService', postFactory);

    postFactory.$inject = ['$http', '$log'];

    function postFactory($http, $log) {
      var _activePost = {};


      return {
        getPosts: getPosts,
        setActivePost: setActivePost,
        // submitComment: submitComment,
        // submitPost: submitPost,
        search: {query: ""},
        sort: {criteria: '-date'}
      }

      function getPosts() {
        return $http.get('/api/v1/posts');
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
        post.comments = [];
        post.show = false;
        post.date = new Date();
        _posts.push(post)
        return
      }
    }
}());
