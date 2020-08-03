var router = express.Router()
const express = require('express');

router.param('user_id', function (req, res, next, id) {
    // sample user, would actually fetch from DB, etc...
    req.user = {
        id: id,
        name: 'DB'
    }
    next()
})

router.route('/users/:user_id')
    .all(function (req, res, next) {
        // runs for all HTTP verbs first
        // think of it as route specific middleware!
        next()
    })
    .get(function (req, res, next) {
        res.json(req.user)
    })
    .put(function (req, res, next) {
        // just an example of maybe updating the user
        req.user.name = req.params.name
        // save user ... etc
        res.json(req.user)
    })
    .post(function (req, res, next) {
        next(new Error('not implemented'))
    })
    .delete(function (req, res, next) {
        next(new Error('not implemented'))
    })