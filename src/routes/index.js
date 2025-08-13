const express = require("express")
const router = express.Router()
const indexController = require("../controllers/index-controller")


router.get("/", indexController.getUsernames)
router.get("/new", indexController.createUsernameGet)
router.post("/new", indexController.createUsernamePost)
router.get("/delete", indexController.deleteUsernames)


module.exports = router