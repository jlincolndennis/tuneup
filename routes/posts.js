const express = require('express');
const router = express.Router();
const knex = require('knex')(require('../knexfile')[process.env.DB || 'development']);
const jwt = require('jsonwebtoken');

router.get('/', function(req, res, next) {
  var _posts = [];

   knex('posts')
  .innerJoin('users', 'posts.user_id', 'users.user_id')
  .select('posts.title', 'posts.description', 'posts.votes', 'posts.image_url', 'posts.created_at', 'users.username', 'posts.post_id', 'posts.user_id')
  .then(function(data){

    data.forEach(function (item){
      _posts.push({
        post_id: item.post_id,
        user_id: item.user_id,
        title: item.title,
        description: item.description,
        image_url: item.image_url,
        votes: item.votes,
        username: item.username,
        created_at: item.created_at,
        comments: []
      })
    })

    return knex('comments')
    .innerJoin('users', 'comments.user_id', 'users.user_id')
    .select('users.username', 'comments.comment', 'comments.post_id', 'comments.created_at', 'comments.comment_id', 'comments.user_id')
    })
    .then(function (dataComments) {

      _posts.forEach(function (postItem){
        dataComments.forEach(function (commentItem){
          if(postItem.post_id === commentItem.post_id){
            postItem.comments.push(commentItem)
          }
        })
      })
      res.json(_posts);
    })

});



router.post('/add', authorization, function(req, res, next){
  knex('posts')
    .insert(req.body)
    .returning('*')
    .then(function(newPost){
      return res.json(newPost[0])
    })
})

router.post('/:postId/upvote', authorization, function (req, res, next) {
  knex('posts')
    .where({post_id: req.params.postId})
    .increment('votes', 1)
    .returning("*")
    .then(function (post) {
      return res.json(post[0]);
    })
})
router.post('/:postId/downvote', authorization, function (req, res, next) {
  knex('posts')
    .where({post_id: req.params.postId})
    .decrement('votes', 1)
    .returning("*")
    .then(function (post) {
      return res.json(post[0]);
    })
})

router.post('/:postId/comments/add', authorization, function(req, res, next) {
  knex('comments')
  .insert(req.body)
  .returning('*')
  .then(function(comment){
    return res.json(comment[0]);
  })
});

router.delete('/:postId', authorization, function(req, res, next) {
  knex('posts')
  .where({post_id: req.params.postId})
  .first()
  .del()
  .then(function(response){
    res.status(200).json({
      msg: ['success delete']
    });
    return
  })
});

router.delete('/comments/:commentId', authorization, function(req, res, next) {
  if (req.body.user_i) {

  }
  knex('comments')
  .where({comment_id: req.params.commentId})
  .first()
  .del()
  .then(function(response){
    res.status(200).json({
      msg: ['success delete comment']
    });
    return
  })
});

function authorization(req, res, next) {
  if (req.headers.authorization) {
    const token = req.headers.authorization.split(' ')[1];
    const payload = jwt.verify(token, process.env.JWT_SECRET);
    console.log('headers exist', payload);
    req.body.activeUser_id = payload.user_id
    console.log('req.body', req.body);
    next();
  } else {
    res.status(403).json({
      error: ['You Must Be Logged In To Vote!']
    })
  }



}

module.exports = router;
