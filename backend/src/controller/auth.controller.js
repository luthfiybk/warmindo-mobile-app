const db = require("../model")
const Pengguna = db.pengguna
const bcrypt = require("bcryptjs")
const { v4: uuidv4 } = require("uuid")
const multer = require('multer')
const upload = multer({ dest: '../../uploads/' })

exports.signup = async (req, res) => {
    try {
        let pengguna = await Pengguna.create({
            idpengguna: uuidv4(),
            username: req.body.username,
            password: bcrypt.hashSync(req.body.password, 8),
            namapengguna: req.body.namapengguna,
            idrole: req.body.idrole,
            status: 'Aktif',
            foto: req.file.foto
        })
    } catch (error) {
        
    }
}