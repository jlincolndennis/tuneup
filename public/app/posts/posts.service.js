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

        submitComment: submitComment,
        submitPost: submitPost,
        updateVote: updateVote,
        search: {query: ""},
        sort: {criteria: '-date'},
        deletePost: deletePost,
        deleteComment: deleteComment
      }

      function getPosts() {
        return $http.get('/api/v1/posts')
          .then(function(res){
            _posts = res.data;
            return _posts;
          });
      }

      function submitComment(comment){
            return $http.post('/api/v1/posts/'+ comment.post_id +'/comments/add', comment)
              .then(function (res){
                // change after resolve is in place
                 comment.username = "jigglyjames";
                 comment.created_at = res.data.created_at;
                 comment.comment_id = res.data.comment_id;

                 _posts.forEach(function (post){
                   if (post.post_id === comment.post_id){
                     post.comments.push(comment)
                   }
                 })
                return _posts
              })
          }

      function submitPost(post) {
        post.votes = 0;
        // until resolve is set up
        post.user_id = 1
        return $http.post('/api/v1/posts/add', post)
          .then(function(newPost){
            newPost.data.username = "bodaciousbud";
            newPost.data.comments = [];
            _posts.push(newPost.data);
            return _posts;
          })
      }

      function updateVote(post, direction) {
        if (direction === 'up') {
          return $http.post('/api/v1/posts/' + post.post_id + '/upvote', post)
            .then(function (res) {
              _posts.forEach(function (item) {
                if (item.post_id === post.post_id) {
                  item.votes++
                }
              })
              return _posts;
            })
        } else {
          return $http.post('/api/v1/posts/' + post.post_id + '/downvote', post)
            .then(function (res) {
              _posts.forEach(function (item) {
                if (item.post_id === post.post_id) {
                  item.votes--
                }
              })
              return _posts;
            })
        }
      }

    function deletePost (post) {
      return $http.delete('/api/v1/posts/' + post.post_id)
      .then(function (res) {
        var target = _posts.indexOf(post);
        _posts.splice(target, 1);
        return _posts;
      })
    }

    function deleteComment (comment) {
      console.log('in service, before call', comment);
      return $http.delete('/api/v1/posts/comments/' + comment.comment_id)
      .then(function (res){
        console.log('res', res);
        console.log('comment', comment);
        _posts.forEach(function (item){
          if (item.post_id === comment.post_id){
            var target = item.comments.indexOf(comment);
            item.comments.splice(target, 1)
          }
        })
        return _posts
      })
    }
    }
}());
