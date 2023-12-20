const { verifySignUp } = require("../middleware")
const controller = require("../controller/auth.controller")
const upload = require("../helpers/uploadImage")

module.exports = function (app) {
    // app.use(function(req, res, next) {
    //     res.header(
    //         "Access-Control-Allow-Headers", 
    //         "x-access-token, Origin, Content-Type, Accept"
    //     )
    //     next()
    // })

    app.post(
        '/api/auth/login',
        controller.login
    )

    app.post(
        '/api/auth/signup',
        upload.single('foto'),
        controller.signup
    )

    app.post(
        '/api/auth/logout',
        controller.logout
    )

    app.post(
        '/api/auth/masuk',
        controller.masukShift
    )
}