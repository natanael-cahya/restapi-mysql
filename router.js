`use strict`


module.exports = (app) => {
    let jsonku = require('./controller')
    app.route('/').get(jsonku.index)
    app.route('/mahasiswa').get(jsonku.mahasiswa)
    app.route('/mahasiswa/:nip').get(jsonku.viewID)
    app.route('/mahasiswa').post(jsonku.tbData)
    app.route('/mahasiswa/:nip').put(jsonku.edData)
    app.route('/mahasiswa/:nip').delete(jsonku.delData)
    app.route('/detailMahasiswa').get(jsonku.vGroup)
}
