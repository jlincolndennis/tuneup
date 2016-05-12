var express = require('express');
var router = express.Router();
var knex = require('knex')(require('../knexfile')[process.env.DB || 'development']);

router.get('/api/v1/posts', function(req, res, next){
  knex('posts')
    .innerJoin('users', 'posts.user_id','users.user_id')
    .returning('title', 'description', 'votes', 'image_url', 'created_at', 'username')
    .then(function(posts){
    return res.json(posts);
  })
})

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
