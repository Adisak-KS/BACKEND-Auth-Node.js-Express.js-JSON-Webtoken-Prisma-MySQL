const express = require("express");
const router = express.Router();

const { list, update, remove } = require("../controllers/user");

router.get("/users", list);
router.patch("/users/:userId", update);
router.delete("/users/:userId", remove);


module.exports = router