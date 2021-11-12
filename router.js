`use strict`


module.exports = (app) => {
    let jsonku = require('./controller')
    app.route('/').get(jsonku.index)
    app.route('/mahasiswa').get(jsonku.mahasiswa)
    app.route('/mahasiswa/:nip').get(jsonku.viewID)
    app.route('/mahasiswa').post(jsonku.tbData)
}
