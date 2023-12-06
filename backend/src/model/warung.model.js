const { DataTypes } = require('sequelize')

module.exports = (sequelize, Sequelize) => {
    const Warung = sequelize.define('Warung', {
        idwarung: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true,
            allowNull: false,
            validate: {
                notEmpty: true
            },
        },
        namawarung: {
            type: DataTypes.STRING
        },
        logo: {
            type: DataTypes.STRING
        },
        gambar: {
            type: DataTypes.STRING
        },
    }, {
        tableName: 'Warung',
        timestamps: false
    })

    return Warung
}