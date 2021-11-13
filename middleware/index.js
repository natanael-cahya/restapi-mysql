let express = require('express')
let auth = require('./auth')
let router = express.Router()

router.post('/api/v1/register', auth.regis)

module.exports = router
