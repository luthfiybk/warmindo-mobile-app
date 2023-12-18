const { DataTypes } = require('sequelize')

module.exports = (sequelize, Sequelize) => {
    const Pelanggan = sequelize.define('Pelanggan', {
        idpelanggan: {
            type: DataTypes.STRING,
            primaryKey: true,
            allowNull: false,
            validate: {
                notEmpty: true
            },
        },
        namapelanggan: {
            type: DataTypes.STRING
        },
        tanggaldaftar: {
            type: DataTypes.STRING
        },
        waktudaftar: {
            type: DataTypes.TIME
        },
        poin: {
            type: DataTypes.INTEGER
        },
        status: {
            type: DataTypes.ENUM(['Aktif', 'Tidak Aktif'])
        }
    }, {
        tableName: 'Pelanggan',
        timestamps: false
    })
    
    return Pelanggan
}