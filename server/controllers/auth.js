const prisma = require("../prisma/prisma");


exports.register = (req, res) => {
    const {email, password} = req.body
    console.log(email, password)
    res.send("Hello Register")
}

exports.login = (req, res) => {
    res.send("Hello Login")
}