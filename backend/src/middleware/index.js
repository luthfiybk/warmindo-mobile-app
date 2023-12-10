const verifySignUp = require("../middleware/verifySignUp")
const authJwt = require('../middleware/authJwt')

module.exports = { verifySignUp, authJwt }