const { DataTypes } = require('sequelize')

module.exports = (sequelize, Sequelize) => {
    const Role = sequelize.define('Role', {
        idrole: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
        },
        role: {
            type: DataTypes.STRING
        },
        status: {
            type: DataTypes.ENUM(['Aktif', 'Tidak Aktif'])
        }
    }, {
        tableName: 'Role',
        timestamps: false
    })

    return Role
}