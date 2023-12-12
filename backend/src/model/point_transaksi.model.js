const { DataTypes } = require('sequelize')

module.exports = (sequelize, Sequelize) => {
    const PoinTransaksi = sequelize.define('PoinTransaksi', {
        idpointransaksi: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true,
            allowNull: false,
            validate: {
                notEmpty: true
            },
        },
        tanggal: {
            type: DataTypes.STRING
        },
        waktu: {
            type: DataTypes.TIME
        },
        idpelanggan: {
            type: DataTypes.STRING
        },
        jumlahpoin: {
            type: DataTypes.INTEGER
        },
        status: {
            type: DataTypes.ENUM(['Tambah', 'Kurang'])
        },
        poinawal: {
            type: DataTypes.INTEGER
        },
        poinakhir: {
            type: DataTypes.INTEGER
        },
        sumber:{
            type: DataTypes.ENUM(['Transaksi', 'Promosi'])
        }
    }, {
        tableName: 'PoinTransaksi',
        timestamps: false
    })

    return PoinTransaksi
}