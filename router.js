`use strict`


module.exports = (app) => {
    let jsonku = require('./controller')
    app.route('/').get(jsonku.index)
}