const db = require("../model")
const Transaksi = db.transaksi
const detailTransaksi = db.detail_transaksi
const sequelize = db.sequelize

exports.getAll = async (req, res) => {
    const today = new Date().toISOString().slice(0, 10)

    try {
        const transaksi = await Transaksi.findAll({
            where: {
                tanggal: today
            }
        })

        res.status(200).send(transaksi)
    } catch (error) {
        res.status(500).send({ error: error.message })
    }
}

exports.detailTransaksi = async (req, res) => {
    const idtransaksi = req.params.idtransaksi
    try {
        const transaksi = await Transaksi.findOne({
            attributes: ['idtransaksi', 'status'],
            include: [
                {
                    model: detailTransaksi,
                    attributes: ['namamenu', 'jumlah', 'harga', 'subtotal', 'status'],
                    on: {
                        idtransaksi: sequelize.where(
                            sequelize.col('Transaksi.idtransaksi'),
                            '=',
                            sequelize.col('DetailTransaksis.idtransaksi')
                        ),
                    },
                },
            ],
            where: {
                idtransaksi: idtransaksi
            },
            raw: true,
        });
        
        await detailTransaksi.findOne({
            where: {
                idtransaksi: idtransaksi
            }
        })

        res.status(200).send(transaksi)
    } catch (error) {
        res.status(500).send({ error: error.message })
    }
}

exports.createTransaksi = async (req, res) => {
    const today = new Date()
    const dateFormat = `${today.getFullYear()}${(today.getMonth() + 1).toString().padStart(2, '0')}${(today.getDate()).toString().padStart(2, '0')}`
    const tanggal = today.toISOString().slice(0, 10)
    const count = await Transaksi.count()
    const incId = (count + 1).toString().padStart(3, '0')
    const waktu = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds()
    const shift = req.session.shift

    try {
        const transaksi = {
            idtransaksi: req.body.warung + dateFormat + shift + incId,
            tanggal: tanggal,
            waktu: waktu,
            shift: shift,
            idpengguna: req.session.idpengguna,
            idpelanggan: req.body.idpelanggan,
            status: 'Baru',
            kodemeja: req.body.kodemeja,
            namapelanggan: req.body.namapelanggan,
            total: req.body.total,
            metodepembayaran: req.body.metodepembayaran,
            totaldiskon: req.body.totaldiskon,
            idpromosi: req.body.idpromosi
        }

        const detailtransaksi = {
            idtransaksi: transaksi.idtransaksi,
            idmenu: req.body.idmenu,
            namamenu: req.body.namamenu,
            jumlah: req.body.jumlah,
            harga: req.body.harga,
            diskon: req.body.diskon,
            subtotal: req.body.subtotal,
            status: 'Aktif'
        }

        console.log('transaksi: ', transaksi)
        console.log('detailTransaksi: ', detailtransaksi)

        await Transaksi.create(transaksi)
        await detailTransaksi.create(detailtransaksi)

        res.status(200).send({ message: 'Transaksi berhasil dibuat' })
    } catch (error) {
        res.status(500).send({ message: error.message })
    }
}