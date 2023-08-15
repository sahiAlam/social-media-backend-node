const express = require("express");
const router = express.Router();
const {
  handleRegisterUser,
  handleLoginNewUser,
} = require("../controllers/auth");

router.post("/register", handleRegisterUser);
router.post("/login", handleLoginNewUser);

module.exports = router;
