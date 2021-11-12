let mysql = require('mysql')

//koneksi DB
const con = mysql.createConnection({
    host: '127.0.0.1',
    user : 'root',
    password : '',
    database : 'dbrestapi'
})

con.connect((err) == {
    if(err){
        throw err;
    }else{
        console.log('DB Terkoneksi')
    }
})

module.exports = con;