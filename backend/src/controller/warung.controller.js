const db = require("../model")
const Warung = db.warung

exports.getAllWarung = async (req, res) => {
    try {
        const warung = await Warung.findAll()

        res.status(200).send(warung)
    } catch (error) {
        res.status(500).send({ error: error.message })
    }
}

exports.createWarung = async (req, res) => {
    try {
        const incId = await Warung.count() + 1
        const logoFile = req.files['logo'][0]; // Assuming only one file for each field
        const gambarFile = req.files['gambar'][0];
        const warung = await Warung.create({
            idwarung: 'WT' + incId,
            namawarung: req.body.namawarung,
            status: 'Aktif',
            logo: logoFile.filename,
            gambar: gambarFile.filename
        })
        console.log(warung)
        res.status(200).send(warung)
    } catch (error) {
        res.status(500).send({ error: error.message })
    }
}

exports.getWarungById = async (req, res) => {
    try {
        const warung = await Warung.findOne({
            where: {
                idwarung: req.params.idwarung
            }
        })

        res.status(200).send(warung)
    } catch (error) {
        res.status(500).send({ error: error.message })
    }
}

exports.updateWarung = async (req, res) => {
    try {
        const logoFile = req.files['logo'][0]; // Assuming only one file for each field
        const gambarFile = req.files['gambar'][0];
        const warung = await Warung.update({
            namawarung: req.body.namawarung,
            logo: logoFile.filename,
            gambar: gambarFile.filename
        }, {
            where: {
                idwarung: req.params.idwarung
            }
        })

        res.status(200).send(warung)
    } catch (error) {
        res.status(500).send({ error: error.message })
    }
}

exports.deleteWarung = async (req, res) => {
    try {
        const warung = await Warung.destroy({
            where: {
                idwarung: req.params.idwarung
            }
        })

        res.status(200).send(warung)
    } catch (error) {
        res.status(500).send({ error: error.message })
    }
}