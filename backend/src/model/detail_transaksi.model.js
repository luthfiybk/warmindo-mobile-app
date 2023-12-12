const { DataTypes } = require('sequelize')

module.exports = (sequelize, Sequelize) => {
    const DetailTransaksi = sequelize.define('DetailTransaksi', {
        idtransaksi: {
            type: DataTypes.STRING,
            primaryKey: true,
            allowNull: false,
            validate: {
                notEmpty: true
            },
        },
        idmenu: {
            type: DataTypes.ARRAY(DataTypes.INTEGER)
        },
        namamenu: {
            type: DataTypes.ARRAY(DataTypes.STRING)
        },
        jumlah: {
            type: DataTypes.ARRAY(DataTypes.INTEGER)
        },
        harga: {
            type: DataTypes.ARRAY(DataTypes.INTEGER)
        },
        subtotal: {
            type: DataTypes.ARRAY(DataTypes.INTEGER)
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