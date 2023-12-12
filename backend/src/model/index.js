const Sequelize = require('sequelize')
const sequelize = require('../config/db.config')

const db = {}

db.Sequelize = Sequelize
db.sequelize = sequelize

db.pengguna = require('./pengguna.model')(sequelize, Sequelize)
db.aktivitas_pengguna = require('./aktivitas_pengguna.model')(sequelize, Sequelize)
db.warung = require('./warung.model')(sequelize, Sequelize)
db.meja = require('./meja.model')(sequelize, Sequelize)
db.menu = require('./menu.model')(sequelize, Sequelize)
db.transaksi = require('./transaksi.model')(sequelize, Sequelize)
db.detail_transaksi = require('./detail_transaksi.model')(sequelize, Sequelize)
db.point_transaksi = require('./point_transaksi.model')(sequelize, Sequelize)
db.role = require('./role.model')(sequelize, Sequelize)
db.pelanggan = require('./pelanggan.model')(sequelize, Sequelize)
db.promosi = require('./promosi.model')(sequelize, Sequelize)

db.pengguna.belongsTo(db.role, { foreignKey: 'idrole' })
db.role.hasMany(db.pengguna, { foreignKey: 'idrole' })

db.aktivitas_pengguna.belongsTo(db.pengguna, { foreignKey: 'idpengguna' })
db.pengguna.hasMany(db.aktivitas_pengguna, { foreignKey: 'idpengguna' })

db.detail_transaksi.belongsTo(db.transaksi, { foreignKey: 'idtransaksi' })
db.transaksi.hasMany(db.detail_transaksi, { foreignKey: 'idtransaksi' })

// db.detail_transaksi.belongsTo(db.menu, { foreignKey: 'idmenu' })
// db.menu.hasMany(db.detail_transaksi, { foreignKey: 'idmenu' })

db.transaksi.belongsTo(db.pelanggan, { foreignKey: 'idpelanggan' })
db.pelanggan.hasMany(db.transaksi, { foreignKey: 'idpelanggan' })

db.transaksi.belongsTo(db.pelanggan, { foreignKey: 'namapelanggan' })
db.pelanggan.hasMany(db.transaksi, { foreignKey: 'namapelanggan' })

db.transaksi.belongsTo(db.pengguna, { foreignKey: 'idpengguna' })
db.pengguna.hasMany(db.transaksi, { foreignKey: 'idpengguna' })

db.transaksi.belongsTo(db.meja, { foreignKey: 'kodemeja' })
db.meja.hasMany(db.transaksi, { foreignKey: 'kodemeja', unique: true })

db.transaksi.belongsTo(db.promosi, { foreignKey: 'idpromosi' })
db.promosi.hasMany(db.transaksi, { foreignKey: 'idpromosi' })

db.meja.belongsTo(db.warung, { foreignKey: 'idwarung' })
db.warung.hasMany(db.meja, { foreignKey: 'idwarung' })

db.point_transaksi.belongsTo(db.pelanggan, { foreignKey: 'idpelanggan' })
db.pelanggan.hasMany(db.point_transaksi, { foreignKey: 'idpelanggan' })

module.exports = db