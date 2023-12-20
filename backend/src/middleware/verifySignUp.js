const db = require('../model')
const Pengguna = db.pengguna

checkDuplicateUsername = async (req, res, next) => {
    console.log(req.body)
    try {
        const username = await Pengguna.findOne({
            where: {
                username: req.body.username
            }
        })

        if (username) {
            return res.status(400).send({
                message: 'Username sudah digunakan!'
            })
        }

        next()
    } catch (error) {
        res.status(500).send({ message: error.message })
        console.log(error)
    }
}

const verifySignUp = { checkDuplicateUsername }
module.exports = verifySignUp