let connection = require('../db')
let mysql = require('mysql')
let md5 = require('md5')
let response = require('../res')
let jwt = require('jsonwebtoken')
let config = require('../config/secret')
let ip = require('ip')

//register

exports.regis = (req,res) => {
    let post = {
        email: req.body.email,
        password: md5(req.body.password),
        role: req.body.role,
        tgl_daftar: req.body.tgl_daftar
    }

    let query = `SELECT email FROM user WHERE email = '${post.email}'`
    connection.query(query,(err,rows) => {
        console.log(rows.email)
        if(rows.length == 1 ) {
            response.err('Email Sudah digunakan!!',res)
        }else{
                connection.query(`INSERT INTO user SET email='${post.email}',password='${post.password}',role='${post.role}',tgl_daftar='${post.tgl_daftar}'`, (err,rows) => {
                    if(err){
                        response.err('Gagal Daftar',res)
                    }else{
                        response.ok('Berhasil Daftar',res)
                    }
                })
            
            }
        
    })

}

