const db = require("../model")
const Transaksi = db.transaksi

exports.getAll = async (req, res) => {
    const today = new Date().toDateString()

    try {
        const transaksi = await Transaksi.findAll({
            where: {
                tanggal: today
            }
        })

        res.status(200).send({
            message: "Berhasil mendapatkan data transaksi"
        })
    } catch (error) {
        res.status(500).send({ error: error.message })
    }
}

exports.detailTransaksi = async (req, res) => {
    const idtransaksi = req.params.idtransaksi
    try {
        await Transaksi.findOne({
            where: {
                idtransaksi: idtransaksi
            }
        })
    } catch (error) {
        res.status(500).send({ error: error.message })
    }
}

exports.createTransaksi = async (req, res) => {
    const today = new Date()
    const dateFormat = `${today.getFullYear()}${(today.getMonth() + 1).toString().padStart(2, '0')}${(today.getDate()).toString().padStart(2, '0')}`
    const tanggal = today.toLocaleDateString()
    const shift = req.body.shift
    const count = await Transaksi.count()
    const incId = (count + 1).toString().padStart(3, '0')
    const waktu = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds()

    try {
        const transaksi = {
            idtransaksi: req.body.warung + dateFormat + shift + incId,
            tanggal: today,
            waktu: waktu,
            shift: shift,
            idpengguna: req.body.idpengguna,
            idpelanggan: req.body.idpelanggan,
            status: 'Baru',
            kodemeja: req.body.kodemeja,
            namapelanggan: req.body.namapelanggan,
            total: req.body.total,
            metodepembayaran: req.body.metodepembayaran,
            totaldiskon: req.body.totaldiskon,
            idpromosi: req.body.idpromosi
        }

        const detailTransaksi = {
            idtransaksi: transaksi.idtransaksi,
            idmenu: req.body.idmenu,
            jumlah: req.body.jumlah,
            harga: req.body.harga,
            diskon: req.body.diskon,
            total: req.body.total
        }

        console.log(transaksi)
        console.log(detailTransaksi)
        await Transaksi.create(transaksi).then(data => {
            res.status(201).send(data)
        }).catch(err => {
            res.status(500).send({ message: err.message })
        })
        
    } catch (error) {
        res.status(500).send({ message: error.message })
    }
}