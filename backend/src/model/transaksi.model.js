const { DataTypes } = require('sequelize')

module.exports = (sequelize, Sequelize) => {
    const Transaksi = sequelize.define('Transaksi', {
        idtransaksi: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true,
            allowNull: false,
            validate: {
                notEmpty: true
            },
        },
        tanggal: {
            type: DataTypes.DATE
        },
        waktu: {
            type: DataTypes.TIME
        },
        shift: {
            type: DataTypes.ENUM(["1", "2"])
        },
        idpengguna: {
            type: DataTypes.UUID
        },
        idpelanggan: {
            type: DataTypes.UUID,
            allowNull: true,
        },
        status: {
            type: DataTypes.ENUM(["Baru", "Diproses", "Disajikan", "Selesai"])
        },
        kodemeja: {
            type: DataTypes.STRING
        },
        namapelanggan: {
            type: DataTypes.STRING
        },
        total: {
            type: DataTypes.INTEGER
        },
        metodepembayaran: {
            type: DataTypes.ENUM(["Cash", "Kartu Debit", "Kartu Kredit", "QRIS"])
        },
        totaldiskon: {
            type: DataTypes.INTEGER
        },
        idpromosi: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
    },{
        tableName: 'Transaksi',
        timestamps: false
    })

    return Transaksi
}