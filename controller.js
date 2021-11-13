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
        }
    })
}

exports.edData = (req,res) => {
    let param = req.params.nip

    let nim = req.body.nim
    let nama = req.body.nama
    let jurusan = req.body.jurusan

    connection.query(`UPDATE mahasiswa SET nim='${nim}',nama='${nama}',jurusan='${jurusan}' WHERE nip='${param}'`,(err,rows,fields) => {
        if(err){
            console.log(err)
            response.err('Data gagal di Update',res)
        }else{
            response.ok('Data berhasil diubah',res)
        }
    })

}

exports.delData = (req,res) => {
    let param = req.params.nip

    connection.query(`DELETE FROM mahasiswa WHERE nip = '${param}'`, (err,rows,fields) => {
        if(err) {
            response.err('Data Gagal Dihapus',res)
        }else{
            response.ok(`Data Berhasil di hapus no id : ${param}`,res)
        }
    })
}

//tampil matkul group
exports.vGroup = (req,res) => {
    connection.query('SELECT mahasiswa.nip , mahasiswa.nim , mahasiswa.nama , mahasiswa.jurusan , matkul.matkul , matkul.sks FROM krs JOIN matkul JOIN mahasiswa WHERE krs.id_matkul = matkul.id_matkul AND krs.nip = mahasiswa.nip ORDER BY mahasiswa.nip',
    (err,rows,fields) => {
        if(err){
            response.err('Data error',res)
        }else{
            response.okeNested(rows,res)
        }
    })



}