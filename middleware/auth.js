let connection = require('../db')
let mysql = require('mysql')
let md5 = require('md5')
let response = require('../res')
let jwt = require('jsonwebtoken')
let config = require('../config/secret')
let ip = require('ip')
const con = require('../db')

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

//controller Login

exports.login = (req,res) => {
    let post = {
        email : req.body.email,
        password : md5(req.body.password)
    }
        let query = `SELECT * FROM user WHERE email='${post.email}' AND password='${post.password}'`
        connection.query(query,(err,rows)=> {
            if(err){
               console.log(err)
            }else{
                if(rows.length == 1){
                    let token = jwt.sign({rows},config.secret,{
                        expiresIn:1440
                    })
                    id_user = rows[0].id_user;
                    //console.log(id_user)
                    let data = {
                        id_user :id_user,
                        access_token : token,
                        ip_address: ip.address()
                    }
                     connection.query(`INSERT INTO akses_token SET id_user='${data.id_user}',akses_token='${data.access_token}',ip_address='${data.ip_address}'`,(err,rows) => {
                         if(err){
                             console.log(err)
                         }else{
                            res.json({
                                 success  : true,
                                 message:'Token generated',
                                 token:token,
                                 currUser: data.id_user
                             })
                         }
                     })
                }else{
                    res.json({"Error":true,"Message":"Email/Password Wrong!!"});
                   // console.log(rows.id)
                    }
            }
            
        })
    }

