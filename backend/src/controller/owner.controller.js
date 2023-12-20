const db = require("../model")
const Pengguna = db.pengguna
const sequelize = db.sequelize
const Role = db.role

exports.getOwner = async (req, res) => {
    const idpengguna = req.session.idpengguna

    try {
        const pengguna = await Pengguna.findOne({
            attributes: ['idpengguna', 'username', 'namapengguna', 'foto', 'status', [sequelize.col('Role.role'), 'role']],
            include: {
                model: Role,
                attributes: [],
                on: {
                    idrole: sequelize.where(
                        sequelize.col('Pengguna.idrole'),
                        '=',
                        sequelize.col('Role.idrole')
                    ),
                }
            },  
            where: {
                idpengguna: idpengguna
            }
        })

        res.status(200).send(pengguna)
    } catch (error) {
        res.status(500).send({ error: error.message })
    }
}