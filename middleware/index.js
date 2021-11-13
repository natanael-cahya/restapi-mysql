let express = require('express')
let auth = require('./auth')
let router = express.Router()
let verif = require('./verif')

router.post('/api/v1/register', auth.regis)
router.post('/api/v1/login',auth.login)

//hal butuh Auth

router.get('/api/v1/rahasia',verif(),auth.secretz)

module.exports = router
