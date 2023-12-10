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

// db.sequelize.sync({ force: true })
const today = new Date().toLocaleDateString()
console.log(today)

require("./src/routes/auth.routes")(app)
require("./src/routes/kasir.routes")(app)

app.listen(port, () => {
    console.log(`Server running on port ${port}`)
})