const {DataTypes} = require('sequelize')

module.exports = (sequelize, Sequelize) => {
    const Promosi = sequelize.define('Promosi', {
        idpromosi: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
            validate: {
                notEmpty: true
            },
        },
        namapromosi: {
            type: DataTypes.STRING
        },
        deskripsi: {
            type: DataTypes.STRING
        },
        jumlahpoin: {
            type: DataTypes.INTEGER
        },
        gambar: {
            type: DataTypes.STRING
        },
    }, {
        tableName: 'Promosi',
        timestamps: false
    })

    return Promosi
}