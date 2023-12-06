const { DataTypes } = require('sequelize')

module.exports = (sequelize, Sequelize) => {
    const Meja = sequelize.define('Meja', {
        idmeja: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true,
            allowNull: false,
            validate: {
                notEmpty: true
            },
        },
        idwarung: {
            type: DataTypes.UUID
        },
        kodemeja: {
            type: DataTypes.STRING
        }
    }, {
        tableName: 'Meja',
        timestamps: false
    })

    return Meja
}