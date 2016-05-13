var express = require('express');
var router = express.Router();
var knex = require('knex')(require('../knexfile')[process.env.DB || 'development']);

router.get('/api/v1/posts', function(req, res, next) {
  var _posts = [];

   knex('posts')
  .innerJoin('users', 'posts.user_id', 'users.user_id')
  .select('posts.title', 'posts.description', 'posts.votes', 'posts.image_url', 'posts.created_at', 'users.username', 'posts.post_id')
  .then(function(data){

    data.forEach(function (item){
      _posts.push({
        id: item.post_id,
        title: item.title,
        description: item.description,
        image_url: item.image_url,
        votes: item.votes,
        username: item.username,
        comments: []
      })
    })

    return knex('comments')
    .innerJoin('users', 'comments.user_id', 'users.user_id')
    .select('users.username', 'comments.comment', 'comments.post_id', 'comments.created_at')
    })
    .then(function (dataComments) {

      _posts.forEach(function (postItem){
        dataComments.forEach(function (commentItem){
          if(postItem.id === commentItem.post_id){
            postItem.comments.push(commentItem)
          }
        })
      })
      res.json(_posts);
    })

});

router.post('/api/v1/posts/add', function(req, res, next){
  knex('posts')
    .insert(req.body)
    .returning('*')
    .then(function(newPost){
      return res.json(newPost[0])
    })
})

router.get('*', function(req, res, next){
  res.sendfile('index.html');
})

module.exports = router;
