const db = require("../model")
const Menu = db.menu

exports.getAll = async (req, res) => {
    try {
        const menu = await Menu.findAll()
        res.status(200).send(menu)
    } catch (error) {
        res.status(500).send({ error: error.message })
    }
}