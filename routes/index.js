var express = require('express');
var router = express.Router();
var knex = require('knex')(require('../knexfile')[process.env.DB || 'development']);

router.get('/api/v1/posts', function(req, res, next){
  knex('posts').then(function(posts){
    return res.json(posts);
  })
})

router.get('*', function(req, res, next){
  res.sendfile('index.html');
})

module.exports = router;
