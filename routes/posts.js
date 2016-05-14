var express = require('express');
var router = express.Router();
var knex = require('knex')(require('../knexfile')[process.env.DB || 'development']);

router.get('/', function(req, res, next) {
  var _posts = [];

   knex('posts')
  .innerJoin('users', 'posts.user_id', 'users.user_id')
  .select('posts.title', 'posts.description', 'posts.votes', 'posts.image_url', 'posts.created_at', 'users.username', 'posts.post_id')
  .then(function(data){

    data.forEach(function (item){
      _posts.push({
        post_id: item.post_id,
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
    .select('users.username', 'comments.comment', 'comments.post_id', 'comments.created_at', 'comments.comment_id')
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



router.post('/add', function(req, res, next){
  knex('posts')
    .insert(req.body)
    .returning('*')
    .then(function(newPost){
      return res.json(newPost[0])
    })
})

router.post('/:postId/upvote', function (req, res, next) {
  knex('posts')
    .where({post_id: req.params.postId})
    .increment('votes', 1)
    .returning("*")
    .then(function (post) {
      return res.json(post[0]);
    })
})
router.post('/:postId/downvote', function (req, res, next) {
  knex('posts')
    .where({post_id: req.params.postId})
    .decrement('votes', 1)
    .returning("*")
    .then(function (post) {
      return res.json(post[0]);
    })
})

router.post('/:postId/comments/add', function(req, res, next) {
  knex('comments')
  .insert(req.body)
  .returning('*')
  .then(function(comment){
    return res.json(comment[0]);
  })
});

router.delete('/:postId', function(req, res, next) {
  knex('posts')
  .where({post_id: req.params.postId})
  .first()
  .del()
  .then(function(response){
    res.status(200).json({
      msg: 'success delete'
    });
    return
  })
});

router.delete('/comments/:commentId', function(req, res, next) {
  knex('comments')
  .where({comment_id: req.params.commentId})
  .first()
  .del()
  .then(function(response){
    res.status(200).json({
      msg: 'success delete comment'
    });
    return
  })
});



module.exports = router;
