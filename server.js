const express = require('express')

const app = express()

//parse apl
app.use(express.urlencoded({
    extended: true
}));
app.use(express.json())

//panggil router

let routes = require('./router')
routes(app)

 app.listen(3000, () => {
    console.log('Server Berjalan pada = localhost:3000')
 })


