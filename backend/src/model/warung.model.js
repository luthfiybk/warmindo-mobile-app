const { DataTypes } = require('sequelize')

module.exports = (sequelize, Sequelize) => {
    const Warung = sequelize.define('Warung', {
        idwarung: {
            type: DataTypes.STRING,
            primaryKey: true,
            allowNull: false
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