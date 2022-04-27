const router = require('express').Router()

const User = require('../app/controller/user.controller')

router.post('/register', User.register)
router.post('/login', User.login)

module.exports = router
