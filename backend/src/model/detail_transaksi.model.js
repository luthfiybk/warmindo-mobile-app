const { DataTypes } = require('sequelize')

module.exports = (sequelize, Sequelize) => {
    const DetailTransaksi = sequelize.define('DetailTransaksi', {
        idtransaksi: {
            type: DataTypes.UUID,
        },
        idmenu: {
            type: DataTypes.UUID
        },
        namamenu: {
            type: DataTypes.STRING
        },
        jumlah: {
            type: DataTypes.INTEGER
        },
        harga: {
            type: DataTypes.INTEGER
        },
        subtotal: {
            type: DataTypes.INTEGER
        },
        status: {
            type: DataTypes.ENUM(['Aktif', 'Batal'])
        }
    }, {
        tableName: 'DetailTransaksi',
        timestamps: false
    })

    return DetailTransaksi
}