const db = require('../model')
const Pengguna = db.pengguna
const jwt = require('jsonwebtoken')
const config = require('../config/auth.config')

verifyToken = async (req, res, next) => {
    let token = req.session.token

    if(!token){
        return res.status(403).send({
            message: "No token provided!"
        })
    }

    jwt.verify(token, config.secret, async (err, decoded) => {
        if(err){
            return res.status(401).send({
                message: "Unauthorized!"
            })
        }
        req.session.idpengguna = decoded.idpengguna

        next()
    })
}

isKasir = async (req, res, next) => {
    try {
        const pengguna = await Pengguna.findOne({
            where: {
                idpengguna: req.session.idpengguna
            }
        })

        if(pengguna.idrole != 1) {
            return res.status(403).send({
                message: "Require Kasir Role!"
            })
        }

        next()
    } catch (error) {
        return res.status(500).send({ message: error.message })
    }
}

const authJwt = { verifyToken: this.verifyToken, isKasir: this.isKasir }
module.exports = authJwt