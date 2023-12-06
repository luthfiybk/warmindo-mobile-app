const { DataTypes } = require('sequelize')

module.exports = (sequelize, Sequelize) => {
    const Role = sequelize.define('Role', {
        idrole: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true,
            allowNull: false,
            validate: {
                notEmpty: true
            },
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