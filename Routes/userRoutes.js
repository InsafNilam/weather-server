const express = require("express");

const router = express.Router();
const { createUser, loginUser } = require("../Controllers/userController");

router.post("/signup", createUser);
router.post("/signin", loginUser);

module.exports = router;
