let express = require('express')
let auth = require('./auth')
let router = express.Router()

router.post('/api/v1/register', auth.regis)
router.post('/api/v1/login',auth.login)

module.exports = router
