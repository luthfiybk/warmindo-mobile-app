const { DataTypes } = require('sequelize')

module.exports = (sequelize, Sequelize) => {
    const Pelanggan = sequelize.define('Pelanggan', {
        idpelanggan: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
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
            type: DataTypes.DATE
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