const db = require('../model')
const Role = db.role

exports.getAllRole = async (req, res) => {
    try {
        await Role.findAll({
            order: [
                ['idrole', 'ASC']
            ]
        })
        .then(role => {
            res.status(200).send(role)
        })
    } catch (error) {
        res.status(500).send({message: error.message})
    }
}

exports.createRole = async (req, res) => {
    try {
        await Role.create({
            role: req.body.role,
            status: 'Aktif'
        })
        .then(role => {
            res.status(200).send(role)
        })
    } catch (error) {
        res.status(500).send({message: error.message})
    }
}

exports.getRoleById = async (req, res) => {
    try {
        await Role.findOne({
            where: {
                idrole: req.params.idrole
            }
        })
        .then(role => {
            res.status(200).send(role)
        })
    } catch (error) {
        res.status(500).send({message: error.message})
    }

}

exports.updateRole = async (req, res) => {
    try {
        await Role.update({
            role: req.body.role,
            status: req.body.status
        }, {
            where: {
                idrole: req.params.idrole
            }
        })
        .then(role => {
            res.status(201).send({message: "Role updated successfully"})
        })
    } catch (error) {
        res.status(500).send({message: error.message})
    }
}

exports.deleteRole = async (req, res) => {
    try {
        await Role.destroy({
            where: {
                idrole: req.params.idrole
            }
        })
        .then(role => {
            res.status(200).send(role)
        })
    } catch (error) {
        res.status(500).send({message: error.message})
    }
}