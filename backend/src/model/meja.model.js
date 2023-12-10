const { DataTypes } = require('sequelize')

module.exports = (sequelize, Sequelize) => {
    const Meja = sequelize.define('Meja', {
        idmeja: {
            type: DataTypes.STRING,
            primaryKey: true,
            allowNull: false,
            validate: {
                notEmpty: true
            },
        },
        idwarung: {
            type: DataTypes.STRING
        },
        kodemeja: {
            type: DataTypes.STRING,
            unique: true,
            allowNull: false,
            validate: {
                notEmpty: true
            },
        }
    }, {
        tableName: 'Meja',
        timestamps: false
    })

    return Meja
}