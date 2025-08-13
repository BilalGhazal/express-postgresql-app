const db = require("../db/queries")

async function getUsernames(req, res) {
    const usernames = await db.getAllUsernames()
    console.log("Usernames: ", usernames)
    res.render("index", {title: "Users", usernames: usernames})
}

async function createUsernameGet(req, res) {
    res.render("new", {title: "New User"})
    
}

async function createUsernamePost(req, res) {
    const username = req.body.username
    console.log("Username to be saved: ", username)
    await db.insertUsername(username)
    res.redirect("/")
}

async function deleteUsernames(req, res) {
    await db.deleteAllUsernames()
    res.redirect("/")
}

module.exports = {getUsernames, createUsernameGet, createUsernamePost, deleteUsernames}