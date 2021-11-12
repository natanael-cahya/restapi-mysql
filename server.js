const express = require('express')
const bodyParser = require('body-parser')


const app = express()

//parse apl
app.use(express.urlencoded({
    extended: true
}));
app.use(express.json())


 app.listen(3000, () => {
    console.log('Server Berjalan pada = localhost:3000')
 })


