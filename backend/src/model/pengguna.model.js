const {DataTypes} = require('sequelize');

module.exports = (sequelize, Sequelize) => {
    const Pengguna = sequelize.define('Pengguna', {
        idpengguna: {
            type: DataTypes.STRING,
            primaryKey: true,
            allowNull: false
        },
        username: {
            type: DataTypes.STRING,
            unique: true
        },
        password: {
            type: DataTypes.STRING
        },
        namapengguna: {
            type: DataTypes.STRING
        },
        idrole: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        status: {
            type: DataTypes.ENUM(['Aktif', 'Tidak Aktif'])
        },
        foto: {
            type: DataTypes.STRING
        },
    }, {
        tableName: 'Pengguna',
        timestamps: false
    })

    return Pengguna
}