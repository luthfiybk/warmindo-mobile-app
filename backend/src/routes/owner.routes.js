const roleController = require("../controller/role.controller")
const warungController = require("../controller/warung.controller")
const upload = require("../helpers/uploadImage")
const ownerController = require("../controller/owner.controller")

module.exports = function(app){
    app.get("/api/role", roleController.getAllRole)
    app.post("/api/role", roleController.createRole)
    app.get("/api/role/:idrole", roleController.getRoleById)
    app.put("/api/role/:idrole", roleController.updateRole)
    app.delete("/api/role/:idrole", roleController.deleteRole)

    app.get(
        "/api/warung",
        warungController.getAllWarung
    )
    app.post(
        "/api/warung",
        upload.fields([
            { name: "logo", maxCount: 1 },
            { name: "gambar", maxCount: 1 }
        ]),
        warungController.createWarung
    )
    app.get(
        "/api/warung/:idwarung",
        warungController.getWarungById
    )
    app.put(
        "/api/warung/:idwarung",
        upload.fields([
            { name: "logo", maxCount: 1 },
            { name: "gambar", maxCount: 1 }
        ]),
        warungController.updateWarung
    )
    app.delete(
        "/api/warung/:idwarung",
        warungController.deleteWarung
    )

    app.get(
        "/api/owner",
        ownerController.getOwner
    )
}