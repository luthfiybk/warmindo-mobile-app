const express = require('express')
const bodyParser = require('body-parser')
require('dotenv').config()

const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

const port = process.env.PORT

app.listen(port, () => {
    console.log(`Server running on port ${port}`)
})