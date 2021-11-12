`use strict`

let response = require('./res')
let connection = require('./db')

exports.index = (req,res) =>{
    response.ok("Aplikasi REST API",res)
}

exports.mahasiswa = (req,res) => {
    connection.query("SELECT * FROM mahasiswa", (err , rows , fields) => {
        if(err) {
            console.log(err)
        }else{
            response.ok(rows,res)
        }
    })
}

//tampil berdasarkan id
exports.viewID = (req,res) => {
    let nip = req.params.nip
    connection.query(`SELECT * FROM mahasiswa WHERE nip = ${nip}`, (err , rows,fields) => {
        if(err) {
            console.log(err)
            response.err('Data tidak ditemukan',res)
        }else{
            response.ok(rows,res)
          console.log(rows)
        }
    })
}

exports.tbData = (req,res) => {
    let nim = req.body.nim
    let nama = req.body.nama
    let jurusan = req.body.jurusan

    connection.query(`INSERT INTO mahasiswa(nim,nama,jurusan) VALUES('${nim}','${nama}','${jurusan}')`,(err,rows,fields) => {
        if(err){
            console.log(err)
            response.err('Data gagal ditambah',res)
        }else{
            response.ok('Berhasil Ditambah',res)
            console.log(rows)
        }
    })
}