const express = require("express")
require("dotenv").config()
const indexController = require("./src/controllers/index-controller")

const PORT = process.env.PORT

const app = express()

app.use("/", indexController)



app.listen(PORT, () => {
    console.log(`App started and is listening on ${PORT}`)
})