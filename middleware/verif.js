const jwt = require('jsonwebtoken')
const { token } = require('morgan')
const config = require('../config/secret')
let connection = require('../db')

function verif() {
    return (req,res,next) => {
        // let data = connection.query
        let tokenBearer = req.headers.authorization
        if(tokenBearer) {
            let token = tokenBearer.split(' ')[1]
          
            //verif JWT
            jwt.verify(token,config.secret,(err,decode) => {
                if(err){
                   // console.log(decode)
                    return res.status(401).send({auth:false,message:'invalid Token!'})
                   
                }else{
                    if(decode.dataPayload.role == 2){
                        req.auth=decode
                        next()
                    }else{
                        console.log(decode.dataPayload.role)
                        return res.status(401).send({auth:false,message:'Failed Auth Role!'})
                    }
                }
            })
        }else{
            return res.status(401).send({auth:false,message:'Token Notfound'})
        }
    }
}
module.exports = verif