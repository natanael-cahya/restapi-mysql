`use strict`

let response = require('./res')
let connection = require('./db')

exports.index = (req,res) =>{
    response.ok("Aplikasi REST API")
}