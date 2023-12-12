const { DataTypes } = require('sequelize')

module.exports = (sequelize, Sequelize) => {
    const AktivitasPengguna = sequelize.define('AktivitasPengguna', {
        idaktivitas: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true,
            allowNull: false,
            validate: {
                notEmpty: true
            },
        },
        idpengguna: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: true
            },
        },
        aktivitas: {
            type: DataTypes.ENUM(['Login', 'Logout', 'Akses Shift'])
        },
        tanggal: {
            type: DataTypes.STRING
        },
        waktu: {
            type: DataTypes.TIME
        },
    }, {
        tableName: 'AktivitasPengguna',
        timestamps: false
    })

    return AktivitasPengguna
}