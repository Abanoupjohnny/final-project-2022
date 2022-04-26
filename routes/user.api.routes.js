const router = require('express').Router()

const User = require('../app/controller/user.controller')

router.post('/register', User.register)

module.exports = router
