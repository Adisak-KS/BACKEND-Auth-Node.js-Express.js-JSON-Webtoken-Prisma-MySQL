const express = require("express");
const router = express.Router();

router.get("/register", (req, res) => {
    res.send("Hello Register")
})

router.get("/login", (req, res) => {
    res.send("Hello Login")
})

module.exports = router