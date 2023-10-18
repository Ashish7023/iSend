const express = require("express");
const router = express.Router();
const registerUser = require("../controllers/userControllers");
// _______________________________________________________

router.post(registerUser);
//   router.post("/login", authUser);

// _______________________________________________________
module.exports = router;
