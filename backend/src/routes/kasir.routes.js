const transaksiController = require('../controller/transaksi.controller')
const menuController = require('../controller/menu.controller')
const kasirController = require('../controller/kasir.controller')

module.exports = function(app){
    // app.use(function(req, res, next) {
    //     res.header(
    //         "Access-Control-Allow-Headers", 
    //         "x-access-token, Origin, Content-Type, Accept"
    //     )
    //     next()
    // })

    app.get(
        '/api/kasir/transaksi',
        transaksiController.getAll
    )

    app.post(
        '/api/kasir/transaksi',
        transaksiController.createTransaksi
    )

    app.get(
        '/api/kasir/transaksi/:idtransaksi',
        transaksiController.detailTransaksi
    )

    app.get(
        '/api/kasir/menu',
        menuController.getAll
    )

    app.get(
        '/api/kasir/profile',
        kasirController.getProfile
    )
}