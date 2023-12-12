const express = require('express')
const bodyParser = require('body-parser')
require('dotenv').config()
const cookieSession = require('cookie-session')
const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cookieSession({
    name: 'warmindo-session',
    keys: ['COOKIE_SECRET'],
    httpOnly: true
}))

const port = process.env.PORT

const db = require("./src/model")
const Role = db.role
const Warung = db.warung
const Meja = db.meja

// db.sequelize.sync({ force: true }).then(() => {
//     initial()
// })

function initial() {
    Role.create({
        idrole: 1,
        role: "Kasir",
        status: "Aktif"
    })

    Warung.create({
        idwarung: 'WT1',
        namawarung: 'Warmindo',
        logo: 'logo',
        gambar: 'gambar'
    })

    Meja.create({
        idmeja: 'A1',
        idwarung: 'WT1',
        kodemeja: 'A1'
    })
}

const now = new Date();
const localDate = new Date(now.getTime() + 7 * 60 * 60000); // Menambahkan 7 jam ke waktu UTC
const formattedDate = localDate.toISOString().slice(0, 10);
console.log(formattedDate);

require("./src/routes/auth.routes")(app)
require("./src/routes/kasir.routes")(app)

app.listen(port, () => {
    console.log(`Server running on port ${port}`)
})