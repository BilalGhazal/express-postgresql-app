const express = require("express")
require("dotenv").config()
const path = require("node:path")
const indexRouter = require("./src/routes/index")

const PORT = process.env.PORT

const app = express()

app.set("views", path.join(__dirname, "views"))
app.set("view engine", "ejs")

app.use(express.urlencoded({extended: true}))
``
app.use("/", indexRouter)


app.listen(PORT, () => {
    console.log(`App started and is listening on ${PORT}`)
})