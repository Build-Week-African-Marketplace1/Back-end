const router = require('express').Router();

const Users = require('./users-model.js');
const restricted = require('../auth/restricted-middleware.js');

router.get('/', restricted, (req, res) => {
    Users.find()
        .then(users => {
            res.json(users);
        })
        .catch(err => res.send(err));
});

router.get("/:id", restricted, (req, res) => {
  Users.findById(req.params.id)
    .then(users => {
        console.log(users);
        console.log(req.params.id);
      res.json(users);
    })
    .catch(err => res.send(err));
});

module.exports = router;