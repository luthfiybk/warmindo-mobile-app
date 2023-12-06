const { DataTypes } = require('sequelize')

module.exports = (sequelize, Sequelize) => {
    const Menu = sequelize.define('Menu', {
        idmenu: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true,
            allowNull: false,
            validate: {
                notEmpty: true
            },
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