const express = require('express')
const morgan = require('morgan')
const app = express()

//parse apl
app.use(express.urlencoded({
    extended: true
}));
app.use(express.json())
app.use(morgan('dev'))

//panggil router

let routes = require('./router')
routes(app)

//daftar routes index
app.use('/auth',require('./middleware'))

 app.listen(3000, () => {
    console.log('Server Berjalan pada = localhost:3000')
 })


