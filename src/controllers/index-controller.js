const db = require("../db/queries")

async function getUsernames(req, res) {
    const searchValue = req.query.searchValue

    if (searchValue) {
        const usernames = await db.getSearchedUsernames(searchValue)
        console.log("Usernames: ", usernames)
        res.render("index", {title: "Users", usernames, searchValue})
    }
    else {
        const usernames = await db.getAllUsernames()
        console.log("Usernames: ", usernames)
        res.render("index", {title: "Users", usernames, searchValue})
    }
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