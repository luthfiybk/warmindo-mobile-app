const { DataTypes } = require('sequelize')

module.exports = (sequelize, Sequelize) => {
    const Menu = sequelize.define('Menu', {
        idmenu: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
        },
        namamenu: {
            type: DataTypes.STRING
        },
        kategori: {
            type: DataTypes.ENUM(['Makanan', 'Minuman'])
        },
        harga: {
            type: DataTypes.INTEGER
        },
        gambar: {
            type: DataTypes.STRING
        }
    }, {
        tableName: 'Menu',
        timestamps: false
    })

    return Menu
}