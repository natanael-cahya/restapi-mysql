`use strict`

let response = require('./res')
let connection = require('./db')

exports.index = (req,res) =>{
    response.ok("Aplikasi REST API",res)
}

exports.mahasiswa = (req,res) => {
    connection.query("SELECT * FROM mahasiswa", (err , rows , fields) => {
        if(err) {
            connection.log(err)
        }else{
            response.ok(rows,res)
        }
    })
}