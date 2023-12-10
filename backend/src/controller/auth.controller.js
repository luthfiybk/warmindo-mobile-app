const db = require("../model")
const Pengguna = db.pengguna
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")
const config = require("../config/auth.config")

exports.signup = async (req, res) => {
    const today = new Date()
    const tanggal = `${today.getFullYear()}${(today.getMonth() + 1).toString().padStart(2, '0')}`
    const total = await Pengguna.count()
    const incId = (total + 1).toString().padStart(2, '0')

    try {
        let pengguna = await Pengguna.create({
            idpengguna: req.body.idpengguna + tanggal + 'X' + incId,
            username: req.body.username,
            password: bcrypt.hashSync(req.body.password, 8),
            namapengguna: req.body.namapengguna,
            idrole: req.body.idrole,
            status: 'Aktif',
            foto: req.body.foto
        })

        const result = await pengguna.save()
        console.log(pengguna)
        if(result) {
            res.status(200).send({
                message: "Pengguna berhasil ditambahkan"
            })
        }
    } catch (error) {
        res.status(500).send({message: error.message })
    }
}

exports.login = async (req, res) => {
    try {
        const pengguna = await Pengguna.findOne({
            where: {
                username: req.body.username
            }
        })

        if(!pengguna) {
            return res.status(404).send({message: "Pengguna tidak ditemukan"})
        }

        let passwordIsValid = bcrypt.compareSync(
            req.body.password,
            pengguna.password
        )

        if(!passwordIsValid) {
            return res.status(401).send({
                message: "Password tidak valid"
            })
        }

        const token = jwt.sign({ idpengguna: pengguna.idpengguna, idrole: pengguna.idrole }, config.secret, {
            algorithm: "HS256",
            allowInsecureKeySizes: true,
            expiresIn: 86400
        })

        req.session.token = token

        res.status(200).send({ 
            idpengguna: pengguna.idpengguna,
            username: pengguna.username,
            accessToken: token 
        })
    } catch (error) {
        res.status(500).send({message: error.message })
    }
}

exports.logout = (req, res) => {
    if(req.session){
        req.session = null
        res.status(200).send({ message: 'Logout successfully!'})
    } else {
        res.status(500).send({ message: 'Logout failed!' })
    }
}