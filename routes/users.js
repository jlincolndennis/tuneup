const express = require('express');
const router = express.Router();
const knex = require('knex')(require('../knexfile')[process.env.DB_ENV || 'development']);
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

router.get('/me', function (req, res, next) {

  if (req.headers.authorization) {
     const token = req.headers.authorization.split(' ')[1];
     const payload = jwt.verify(token, process.env.JWT_SECRET);

     knex('users').where({user_id: payload.user_id})
     .first()
      .then(function (user) {
       if (user) {
         res.json({user_id: user.user_id, username: user.username})
       } else {
         res.status(403).json({
           error: "Invalid ID"
         })
       }
     })
   } else {
  res.status(403).json({
    error: "WHERE IS YOUR MOTHERFUCKING TOKEN??"
  })
}
})

router.post('/signup', function (req, res, next) {
  const errors = []

  if (!req.body.email || !req.body.email.trim()) errors.push("Email can't be blank");
  if (!req.body.username || !req.body.username.trim()) errors.push("Username can't be blank");
  if (!req.body.password || !req.body.password.trim()) errors.push("Password can't be blank");

  if (errors.length) {
    res.status(422).json({
      errors: errors
    })
  } else {
    knex('users')
    .whereRaw('lower(email) = ?', req.body.email.toLowerCase())
    .count()
    .first()
    .then(function (result) {
      if(result.count === "0") {
        const saltRounds = 4
        const passwordHash = bcrypt.hashSync(req.body.password, saltRounds);

        knex('users')
          .insert({
            email: req.body.email,
            username: req.body.username,
            password: passwordHash
          })
          .returning('*')
          .then(function (users) {
            const user = users[0];
            const token = jwt.sign({ user_id: user.user_id }, process.env.JWT_SECRET);
            res.json({
              user_id: user.user_id,
              username: user.username,
              email: user.email,
              token: token
            })
          })
      } else {
        res.status(422).json({
          errors: ['Email is already in the database!']
        })
      }
    })
  }

})

router.post('/login', function (req, res, next) {
  const errors = []

  if (!req.body.email || !req.body.email.trim()) errors.push("Email can't be blank");
  if (!req.body.password || !req.body.password.trim()) errors.push("Password can't be blank");

  if (errors.length) {
    res.status(422).json({
      errors: errors
    })
  } else {
    knex('users')
    .whereRaw('lower(email) = ?', req.body.email.toLowerCase())
    .first()
    .then(function (user) {
      console.log(user);
      if (bcrypt.compareSync(req.body.password, user.password)) {
        const token = jwt.sign({ user_id: user.user_id }, process.env.JWT_SECRET);
        res.json({
          user_id: user.id,
          username: user.username,
          email: user.email,
          token: token
        })
      } else {
        res.status(400).json({
          errors: ['Wrong Password!']
        })
      }

    })
  }

})

module.exports = router;
